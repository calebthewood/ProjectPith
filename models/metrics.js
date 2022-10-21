const client = require("../db.js");
const { DATABASE, SECRET_KEY } = require("../config");
const { today } = require("../helpers/helpers");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const { BadRequestError, NotFoundError } = require("../expressError");
require("colors");


class Metrics {
  static db = client.db(DATABASE).collection("metrics");

  static async updatePageViews({ pathname }) {
    const path = `personalSite${pathname}`;
    console.log("Models - Path: ".yellow, path);

    let res;
    const filter = { route: path };
    const updateDoc = {
      $inc: { visits: 1 },
      $set: { lastVisited: today, route: path }
    };
    const options = { upsert: true };

    try {
      res = await Metrics.db.updateOne(filter, updateDoc, options);
      console.log("METRICS RESPONSE", res);

    } catch (e) {
      console.log(e);
    }
    return res;
  }

  /* payload.
      passerby: '793c1a73-e71c-4666-b702-92291a2d484a',
      created: '2022-9-10',
      iat: 1665449178
  */
  static async updateSessions({ pathname, token }) {
    const path = `personalSite${pathname}`;
    const { passerby, created } = jwt.verify(token, SECRET_KEY);
    console.log("Models - Payload: ".yellow, passerby);
    console.log("Models - Token Created: ".yellow, created);

    let query = {
      "uuid": passerby, "created": created, "sessions.date": today
    };
    let updateDoc = {
      $push: { "sessions.pages": path }
    };
    let options = {
      upsert: true
    };

    let res;

    try {
      res = await Metrics.db.updateOne(query, updateDoc, options);
      console.log("UPDATE SESSIONS", res);

    } catch (e) {
      console.log(e);
    }
    return res;
  }

  static createToken() {
    const uuid = crypto.randomUUID();
    const payload = {
      passerby: uuid,
      created: today,
    };
    return jwt.sign(payload, SECRET_KEY);
  }

  static async getMetrics() {
    let res;
    try {
      res = await Metrics.db.find({}).toArray();
      console.log("FETCH METRICS ".yellow, res)
    } catch (e) {
      console.error("Get Metrics Error:  ".red, e);
      res = { error: "Error Fetching Metrics" };
    }
    return res;
  }
}

module.exports = Metrics;