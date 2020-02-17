const express = require("express");
const http = require("http");
const gpio = require("onoff").Gpio;

const up = new gpio(17, "out");
const down = new gpio(18, "out");
const left = new gpio(22, "out");
const right = new gpio(23, "out");

const port = process.env.PORT || 80;
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  return res.redirect("index.html");
});

app.post("/upPress", function(req, res) {
  up.writeSync(1);
  res.end();
});

app.post("/upRelease", function(req, res) {
  up.writeSync(0);
  res.end();
});

app.post("/downPress", function(req, res) {
  down.writeSync(1);
  res.end();
});

app.post("/downRelease", function(req, res) {
  down.writeSync(0);
  res.end();
});

app.post("/leftPress", function(req, res) {
  left.writeSync(1);
  res.end();
});

app.post("/leftRelease", function(req, res) {
  left.writeSync(0);
  res.end();
});

app.post("/rightPress", function(req, res) {
  right.writeSync(1);
  res.end();
});

app.post("/rightRelease", function(req, res) {
  right.writeSync(0);
  res.end();
});

const httpServer = http.createServer(app);
httpServer.listen(port).on("error", console.log);
