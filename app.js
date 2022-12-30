const express = require("express");
const app = express();

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

require("./config/mongoose");
const routes = require("./routes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
// app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.listen(3000, () =>
  console.log(`Sever is running on: http://localhost:3000`)
);
