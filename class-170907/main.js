/* IMAGE & CAPTION */

document.getElementById("thumb1").onclick = function() {
  changeImage("images/1.jpg", "Welcome to Vegas")
}

document.getElementById("thumb2").onclick = function() {
  changeImage("images/2.jpg", "Bellagio Fountain Show")
}

document.getElementById("thumb3").onclick = function() {
  changeImage("images/3.jpg", "The Strip")
  //                //Change the image
  //                document.getElementById("main-img").src = "images/3.jpg";
  //                //Change the caption
  //                document.getElementById("caption").innerHTML = "The Strip";
}

function changeImage(newSource, newCaption) {
  //Change the image
  document.getElementById("main-img").src = newSource;
  //Change the caption
  document.getElementById("caption").innerHTML = newCaption;
}

/* SIZE */

document.getElementById("small").onclick = function() {
  changeWidth("100px");
}

document.getElementById("medium").onclick = function() {
  changeWidth("300px");
}

document.getElementById("large").onclick = function() {
  changeWidth("700px");
}


function changeWidth(newWidth) { //parameter for input
  //px required!
  document.getElementById("main-img").style.width = newWidth;
}

//            // Function declaration
//            function alertMe() {
//                // code goes here 
//                //(doesn't happen until this func is called)
//                alert("Hi!!");
//            }
//            
//            //Calls the function alertMe();
//            alertMe();

document.getElementById("submitButton").onclick = function() {
  // 1. Get what user typed in
  var userHeight = document.getElementById("heightField").value;

  // 2. Change the main image height to what the user typed in
  changeHeight(userHeight);
}

function changeHeight(newHeight) {
  document.getElementById("main-img").style.height = newHeight;
}

