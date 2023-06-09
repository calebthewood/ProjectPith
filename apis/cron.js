const CronJob = require("cron").CronJob;
const { sendSms } = require("../twilioAPI");

/*
 Cron Jobs for Chronos (working title)

 - daily: runs each day to prompt user for whether to start or stop the process
  this is useful b/c user has the ability to start or stop hourly prompts.

- hourly: runs every hour from 8 - 5 on weekdays.

 Minutes: 0-59
 Hours: 0-23
 Day of Month: 1-31
 Months: 0-11 (Jan-Dec)
 Day of Week: 0-6 (Sun-Sat)
*/

const daily = new CronJob(
  "8 8 * * 1-5",
  function () {
    console.log("You will see this message at 08:08 on every day-of-week from Monday through Friday.");
    sendSms("Testing Daily Cron Job. Yes/No");
  },
  null,
  true,
  "America/Los_Angeles"
);

const hourly = new CronJob(
  "* * * * * *",
  function () {
    console.log("You will see this message every second");
  },
  null,
  false,
  "America/Los_Angeles"
);
// hourly.start() - use to