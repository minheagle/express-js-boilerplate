"use strict";

import "dotenv/config";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init db
import "./databases/init.mongodb.js";

// init routes
import routes from "./routes/index.js";
app.use("/", routes);

// handle errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error?.status || 500;
  return res.status(status).json({
    status: "error",
    code: status,
    message: error?.message || "Internal Error Server !",
  });
});

export default app;
