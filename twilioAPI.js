"use strict";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE, MY_PHONE } = require("./config");


// const MessagingResponse = require('twilio').twiml.MessagingResponse;

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

// client.messages
//   .create({
//     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//     from: TWILIO_PHONE,
//     to: MY_PHONE
//   })
//   .then(message => console.log(message.sid));

module.exports = {
  sendSms
};
