const express = require("express");
const route = express.Router();

const home = require("./modules/home");

route.use("/", home);

module.exports = route;
