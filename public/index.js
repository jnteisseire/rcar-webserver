document.getElementById("up").addEventListener("mousedown", upPress);
document.getElementById("up").addEventListener("mouseup", upRelease);
document.getElementById("up").addEventListener("mouseleave", upRelease);

document.getElementById("down").addEventListener("mousedown", downPress);
document.getElementById("down").addEventListener("mouseup", downRelease);
document.getElementById("down").addEventListener("mouseleave", downRelease);

document.getElementById("left").addEventListener("mousedown", leftPress);
document.getElementById("left").addEventListener("mouseup", leftRelease);
document.getElementById("left").addEventListener("mouseleave", leftRelease);

document.getElementById("right").addEventListener("mousedown", rightPress);
document.getElementById("right").addEventListener("mouseup", rightRelease);
document.getElementById("right").addEventListener("mouseleave", rightRelease);

function upPress() {
  $.post("/upPress", function() {});
}

function upRelease() {
  $.post("/upRelease", function() {});
}

function downPress() {
  $.post("/downPress", function() {});
}
function downRelease() {
  $.post("/downRelease", function() {});
}

function leftPress() {
  $.post("/leftPress", function() {});
}
function leftRelease() {
  $.post("/leftRelease", function() {});
}

function rightPress() {
  $.post("/rightPress", function() {});
}
function rightRelease() {
  $.post("/rightRelease", function() {});
}
