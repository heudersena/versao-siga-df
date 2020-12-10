const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nunjucks = require("nunjucks");
const app = express();

const { PORT, HOST } = require("./config/env.json");

nunjucks.configure(path.resolve(__dirname, "..", "src", "views"), {
  express: app,
  noCache: true,
  watch: false,
  web: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./routes");

app.use(routes); 

app.listen( process.env.PORT || PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}`);
});
