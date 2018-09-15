// ---------------- //
// MinScreenSize.JS //
//    By @Jolle     //
//  (C) 2018 - now  //
// CC-BY-NC LICENSE //
// ---------------- //

// Start Configuration //
// Cut and paste this into the HTMl file if you want to use use this on multiple pages, else leave it here to make the HTML look better.
var minscreenlandscape = (192400); // Min size in landscape
var minscreenportrait = (145600); // Min size in portrait
var consolelog = "True";

// Screen is to small and CAN NOT be made bigger
var msgtosmall = "Uw scherm is te klein om te website goed te laten zien, probeer het op een ander apparaat. Indien u op OK drukt is het mogelijk dat de website er niet goed uit ziet!";
// Screen is to small and CAN be made bigger
var msgtosmall2 = "Uw scherm is te klein om te website goed te laten zien, probeer uw browser te vergroten of gebruik een ander apparaat. Indien u op OK drukt zonder dit te doen is het mogelijk dat de website er niet goed uit ziet!";

// End Configuration //

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
