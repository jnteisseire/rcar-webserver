const express = require("express");
const http = require("http");

const port = process.env.PORT || 80;
const hostname = "0.0.0.0";

const app = express();

app.get('/', function(req, res) {
    return res.redirect('gamepad.html' + suffix);
});

app.use(express.static("public"));

const httpServer = http.createServer(app);

httpServer.listen(config.http_port).on("error", console.log);
