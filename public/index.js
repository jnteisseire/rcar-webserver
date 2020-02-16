document.getElementById("upBtn").addEventListener("mousedown", upPress);
document.getElementById("upBtn").addEventListener("mouseup", upRelease);

document.getElementById("down").addEventListener("mousedown", downPress);
document.getElementById("down").addEventListener("mouseup", downRelease);

document.getElementById("left").addEventListener("mousedown", leftPress);
document.getElementById("left").addEventListener("mouseup", leftRelease);

document.getElementById("right").addEventListener("mousedown", rightPress);
document.getElementById("right").addEventListener("mouseup", rightRelease);

document.getElementById("joypad").addEventListener("unload", unload);

var Gpio = require("onoff").Gpio;
var Forward = new Gpio(17, "out");
var Backward = new Gpio(18, "out");
var Left = new Gpio(22, "out");
var Right = new Gpio(23, "out");

function upPress() {
  Forward.writeSync(1);
}
function upRelease() {
  Forward.writeSync(0);
}

function downPress() {
  Backward.writeSync(1);
}
function downRelease() {
  Backward.writeSync(0);
}

function leftPress() {
  Left.writeSync(1);
}
function leftRelease() {
  Left.writeSync(0);
}

function rightPress() {
  Right.writeSync(1);
}
function rightRelease() {
  Right.writeSync(0);
}

function unload() {
  Backward.writeSync(0);
  Forward.writeSync(0);
  Left.writeSync(0);
  Right.writeSync(0);
}
