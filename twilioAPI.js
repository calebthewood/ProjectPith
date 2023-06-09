"use strict";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE, MY_PHONE } = require("./config");

function sendSms(message) {
  const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  return client.messages
    .create({
      body: message,
      from: TWILIO_PHONE,
      to: MY_PHONE
    })
    .then(message => console.log(message.sid));
}

module.exports = {
  sendSms
};
