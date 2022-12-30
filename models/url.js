const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  name: {
    type: String,
    requrired: true,
  },

  short: {
    type: String,
    requrired: true,
  },
});

module.exports = mongoose.model("URL", urlSchema);
