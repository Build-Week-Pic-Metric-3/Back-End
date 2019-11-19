const express = require("express");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/user-router");
const analysisRouter = require("../analysis/analysis-router");

const configureMiddleware = require("./configure-middleware");

const server = express();

//middleware configurator for remote modules
configureMiddleware(server);

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/analysis", analysisRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the API, check the docs for the endpoints.");
});

module.exports = server;
