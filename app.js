"use strict";

/** Express app for project pith. */

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const blogRoutes = require("./routes/blog");
const tweetsRoutes = require("./routes/tweets");
const metricsRoutes = require("./routes/metrics");
const chronosRoutes = require("./routes/chronos");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/blog", blogRoutes);
app.use("/tweets", tweetsRoutes);
app.use("/metrics", metricsRoutes);
app.use("/chronos", chronosRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;