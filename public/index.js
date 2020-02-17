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
  message = { c: "F", t: "1" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}

function upRelease() {
  message = { c: "F", t: "0" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}

function downPress() {
  message = { c: "B", t: "1" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}
function downRelease() {
  message = { c: "B", t: "0" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}

function leftPress() {
  message = { c: "L", t: "1" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}
function leftRelease() {
  message = { c: "L", t: "0" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}

function rightPress() {
  message = { c: "R", t: "1" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}
function rightRelease() {
  message = { c: "R", t: "0" };
  $.post(
    "/",
    { data: message }, // data to be submit
    function() {}
  );
}
