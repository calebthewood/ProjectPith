/* Route(s) for Getting Metrics */

const express = require("express");
const Metrics = require("../models/metrics");
const router = new express.Router();

// sample db model
// let personalSite = {
//   pages: {
//     "about": 4,
//     "home": 3,
//   },
//   visitors:
//    _id: objID,
//    uuid: 123456,
//      sessions: [
//        {
//         date: today,
//         routes ["/about", "home", etc...]
//        }
//      ];


/** POST /metrics
 *
 * Receives pathname and updates metrics DB
 */
router.post("/", async (req, res, next) => {
  let pathname = req.query.pathname;
  let token = req.query.token;

  console.log("Routes - Path: ".yellow, pathname);
  console.log("Routes - Token: ".yellow, token);

  let pageViewRes;
  let sessionsRes;
  let response;
  try {
    // pageViewRes = await Metrics.updatePageViews({ pathname, token });
    response = await Metrics.updateSessions({ pathname, token });
    // response = { sessionsRes, pageViewRes };
  } catch (e) {
    console.log("Metrics Error:   ", e);
    response = "Error upserting page views for: " + pathname;
  }
  return res.json({ response });
});

/** GET /metrics/token
 *
 * Creates and sends a JWT for metrics, not user ID
 *
 * ex: payload {
 *      passerby: uuid,
 *      created: 2022-2-2,
 *    }
 */
router.get("/token", async (req, res, next) => {
  const token = Metrics.createToken();
  console.log("TOKEN CREATED: ".yellow, token);
  return res.json({ token });
});

module.exports = router;
