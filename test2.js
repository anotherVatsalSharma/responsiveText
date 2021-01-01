var x = window.innerWidth;
var y = x * 20;
var z = y / 800;
var a = z + "px";

document.write(x);

document.write(y);

document.write(z);

document.write(a);


document.getElementById("resptxt").style.fontSize = a;


/// test successful

/// problem 1 was tackled by using window.innerWidth instead of screen.innerWidth

/// problem 2 was tackled by introducing a new variable and adding "px" to z i.e. var a = z + "px";

///note : i would still suggest that we use viewport width i.e. vw as units and use CSS instead of this method.

/// this is because you need to refresh evrytime you change window width
