const express = require("express");
const route = express.Router();

const URL = require("../../models/url");
const shorterURL = require("../../shorterURL");

route.get("/", (req, res) => {
  res.render("index");
});

route.post("/", (req, res) => {
  const url = req.body.url;
  let randomURL = shorterURL(5);

  function checkedURL(randomURL) {
    URL.findOne({ shorterURL: randomURL })
      .then((data) => {
        if (data) {
          randomURL = shorterURL(5);
          checkedURL(randomURL);
        }
      })
      .catch((error) => console.log(error));
    return randomURL;
  }

  URL.findOne({ url })
    .then((data) => {
      if (!data) {
        return URL.create({ url, shorterURL: randomURL });
      }
      return data;
    })
    .then((data) => res.render("index", { randomURL: data.shorterURL }))
    .catch((error) => console.log(error));
});

route.get("/:shorterURL", (req, res) => {
  const shorterURL = req.params.shorterURL;

  URL.findOne({ shorterURL })
    .then((data) => {
      if (!data) {
        return res.render("error");
      } else {
        res.redirect(data.url);
      }
    })
    .catch((error) => console.log(error));
});

module.exports = route;
