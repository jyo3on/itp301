/******
 * The two event handlers are listed here.
 ******/


document.getElementById("scaleButton").onclick = function () {
  // Call the scaleImage() function here. When scaleImage() is called, get the width, border and height that the user typed in. Then pass those three data into scaleImage() parameters.
  var userWidth = document.getElementById("widthField").value;
  var userHeight = document.getElementById("heightField").value;
  var userBorder = document.getElementById("borderField").value;
  scaleImage(userWidth, userHeight, userBorder);
}

document.getElementById("infoButton").onclick = function () {
  // Call the imageInfo() function here.
  var currentWidth = document.getElementById("theimage").style.width;
  var currentHeight = document.getElementById("theimage").style.height;
  var currentBorder = document.getElementById("theimage").style.border;
  imageInfo(currentWidth, currentHeight, currentBorder);
}
/******
 * This function has three parameters - when it's called, three pieces of information should be given.
 * These three parameters are newWidth, newHeight, and border.
 * This function should have three lines of code.
 * Each line should set a new style property for the image: width, height, and border.
 * There is only one image on the page, so you don't have to pass the image name as a parameter.
 ******/
function scaleImage(newWidth, newHeight, newBorder) {
  // Write function code here.
  document.getElementById("theimage").style.width = newWidth;
  document.getElementById("theimage").style.height = newHeight;
  document.getElementById("theimage").style.border = newBorder;
}

/******
 * This function gathers all information about the image and outputs it to an alert box.
 * The final message should say "The image has height of X, width of Y, and border of Z".
 ******/
function imageInfo(x, y, z) {
  alert("The image has height of " + y + ", width of " + x + ", and border of " + z);
}
