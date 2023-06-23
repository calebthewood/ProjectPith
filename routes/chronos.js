"use strict";
/* Routes for Hour Measuring App */
const express = require("express");

const { sendSms } = require("../twilioAPI");

const router = new express.Router();



/** POST /chronos
 *
 */
router.post("/", async function (req, res, next) {
  console.log("POST body: /chronos", req.body);

  // step 1 - parse msg
  // step 2 - if not valid, re prompt
  // step 3 - if command (start/stop/help/inspo/totals)
  //          - execute command
  // step 4 - if hourly status msg
  //          - update hourly sums
  // step 5 - save msg to db
  // step 6 - respond w/ confirmation

  const response = req.body.Body;

  if (response === "Yes") {
    sendSms("Thank you");
  }

});

/** GET /chronos
 *
 */
router.get("/", async function (req, res, next) {
  console.log("GET: /chronos");
  return res.json({ msg: "GET Hello World" });
});

module.exports = router;
