// ---------------- //
// MinScreenSize.JS //
//    By @Jolle     //
//  (C) 2018 - now  //
// CC-BY-NC LICENSE //
// ---------------- //

// Configuration is insize HTML this time //

// DO NOT EDIT BELOW
// Getting the screen size
var cscreen = (window.innerWidth * window.innerHeight);
var mscreen = (screen.availWidth * screen.availHeight);

// detecting landscape or portrait
if(window.innerHeight <= window.innerWidth){
  var orientation = "landscape"; // landscape mode
} else if (window.innerHeight >= window.innerWidth) {
  var orientation = "portrait"; // portrait mode
} else {
  var orientation = "landscape"; // error for some reason, than just assume that the screen is landscape
}

// Logger
if (consolelog == "True"){
  console.log("\n\n\n\nMinScreenSize.js\n\n");
  console.log("Current Screen:");
  console.log(window.innerWidth + "px x " + window.innerHeight + "px = " + cscreen + "px");
  console.log(" ");
  console.log("Max Screen:");
  console.log(screen.availWidth + "px x " + screen.availHeight + "px = " + mscreen + "px");
  console.log(" ");
  console.log("orientation:");
  console.log(orientation);
  console.log("\n\n");
}

// Alert the user if needed
if (orientation == "landscape") {
  if (cscreen < minscreenlandscape && mscreen < minscreenlandscape) {
    if (consolelog == "True") {console.log("Creating an alert to warn the user, MinScreenSize thinks that the window CAN'T be made bigger.");}
    alert(msgtosmall);
  } else if (cscreen < minscreenlandscape && mscreen > minscreenlandscape) {
    if (consolelog == "True") {console.log("Creating an alert to warn the user, MinScreenSize thinks that the window CAN be made bigger.");}
    alert(msgtosmall2);
  } else {
    if (consolelog = "True") {console.log("MinScreenSize is done, screensize looks good!");}
  }
} else if (orientation == "portrait") {
  if (cscreen < minscreenportrait && mscreen < minscreenportrait) {
    if (consolelog == "True") {console.log("Creating an alert to warn the user, MinScreenSize thinks that the window CAN'T be made bigger.");}
    alert(msgtosmall);
  } else if (cscreen < minscreenportrait && mscreen > minscreenportrait) {
    if (consolelog == "True") {console.log("Creating an alert to warn the user, MinScreenSize thinks that the window CAN be made bigger.");}
    alert(msgtosmall2);
  } else {
    if (consolelog = "True") {console.log("MinScreenSize is done, screensize looks good!");}
  }
}
