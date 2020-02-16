const express = require("express");
const http = require("http");
const config = require("./config.json");
const port = process.env.PORT || config.port;
const hostname = "0.0.0.0";

const app = express();

app.get("/", function(req, res) {
  return res.redirect("index.html");
});

app.use(express.static("public"));

const httpServer = http.createServer(app);

httpServer.listen(port).on("error", console.log);
