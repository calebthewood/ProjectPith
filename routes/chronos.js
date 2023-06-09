"use strict";
/* Routes for Hour Measuring App */
const express = require("express");

const { sendSms } = require("../twilioAPI");

const router = new express.Router();

/** POST /chronos
 *
 */
router.post("/", async function (req, res, next) {

  const body = await req.body
  const params = await req.params

  console.log("POST body: /chronos", req.body);


  sendSms("Responding from localhost");

});

/** GET /chronos
 *
 */
router.get("/", async function (req, res, next) {
  console.log("GET: /chronos");
  return res.json({ msg: "GET Hello World" });
});



module.exports = router;
