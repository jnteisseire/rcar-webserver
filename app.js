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
  console.log("upPress");
  up.writeSync(1);
  res.end();
});

app.post("/upRelease", function(req, res) {
  console.log("upRelease");
  up.writeSync(0);
  res.end();
});

app.post("/downPress", function(req, res) {
  console.log("downPress");
  down.writeSync(1);
  res.end();
});

app.post("/downRelease", function(req, res) {
  console.log("downRelease");
  down.writeSync(0);
  res.end();
});

app.post("/leftPress", function(req, res) {
  console.log("leftPress");
  left.writeSync(1);
  res.end();
});

app.post("/leftRelease", function(req, res) {
  console.log("leftRelease");
  left.writeSync(0);
  res.end();
});

app.post("/rightPress", function(req, res) {
  console.log("rightPress");
  right.writeSync(1);
  res.end();
});

app.post("/rightRelease", function(req, res) {
  console.log("rightRelease");
  right.writeSync(0);
  res.end();
});

const httpServer = http.createServer(app);
httpServer.listen(port).on("error", console.log);
