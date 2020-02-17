const express = require("express");
const http = require("http");
const config = require("./config.json");
const bodyParser = require("body-parser");
const port = process.env.PORT || config.port;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var tls = require("tls");
var fs = require("fs");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var options = {
  ca: fs.readFileSync("server.crt"),
  checkServerIdentity: function(host, cert) {
    return undefined;
  }
};

var connected = false;
var client;

function connect() {
  client = tls.connect(5000, "192.168.0.155", options, function() {
    if (client.authorized) {
      connected = true;
      client.setEncoding("utf8");
    }
  });

  client.on("error", e => {
    console.log(e);
  });

  client.on("close", function() {
    console.log("Disconnected");
    connected = false;
  });
}

app.get("/", function(req, res) {
  return res.redirect("index.html");
});

app.post("/", function(req, res) {
  console.log("Received post data = " + JSON.stringify(req.body.data));
  if (connected) {
    client.write(JSON.stringify(req.body.data));
    console.log(JSON.stringify(req.body.data));
  } else {
    connect();
  }
  res.end();
});

const httpServer = http.createServer(app);
httpServer.listen(port).on("error", console.log);
