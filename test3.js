function resptxt() {
  var x = window.innerWidth;
  var y = x * 20;
  var z = y / 800;
  var a = z + "px";
  document.getElementById("resptxt").style.fontSize = a;
}

setInterval(resptxt,500);
