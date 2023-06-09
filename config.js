"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

const DATABASE_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_KEY}@cluster0.op83k.mongodb.net/?retryWrites=true&w=majority`;
const DATABASE = process.env.NODE_ENV === "test" ? process.env.TEST_DATABASE : process.env.DATABASE;

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

// 3rd Party API Config Vars
const NOTION_TOKEN = process.env.NOTION_TOKEN || null;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || null;
const TWITTER_TOKEN = process.env.TWITTER_BEARER_TOKEN || null;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || null;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || null;
const TWILIO_PHONE = process.env.TWILIO_PHONE || null;

// Misc. Config Vars
const MY_PHONE = process.env.MY_PHONE || null;

console.log("Pith Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR:".yellow, BCRYPT_WORK_FACTOR);
console.log("Notion Database:".yellow, NOTION_DATABASE_ID && "My Notebook");
console.log("Database:".yellow, DATABASE);
console.log("Twilio Phone #:".yellow, TWILIO_PHONE);
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  DATABASE_URI,
  DATABASE,
  NOTION_TOKEN,
  NOTION_DATABASE_ID,
  TWITTER_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE,
  MY_PHONE
};
