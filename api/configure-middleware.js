const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  server
    .use(helmet())
    .use(express.json())
    .use(morgan("combined"))
    .use(cors());
};
