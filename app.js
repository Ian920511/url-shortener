const express = require("express");
const app = express();

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const shorterURL = require("./shorterURL");
const URL = require("./models/url");
require("./config/mongoose");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const url = req.body.url;
  const randomURL = shorterURL(5);

  URL.findOne({ url })
    .then((data) => {
      if (!data) {
        URL.create({ url, shorterURL: randomURL });
      }
      return data;
    })
    .then((data) => res.render("index", { randomURL: data.shorterURL }))
    .catch((error) => console.log(error));
});

app.get("/:shorterURL", (req, res) => {
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

app.listen(3000, () =>
  console.log(`Sever is running on: http://localhost:3000`)
);
