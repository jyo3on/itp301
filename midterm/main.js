// Three parallel arrays with information on four books.
var titles = ["The Great Gatsby", "Hamlet", "Jane Eyre", "Harry Potter and the Sorcerer's Stone"];
var authors = ["F. Scott Fitzgerald", "William Shakespeare", "Charlotte Bronte", "J.K. Rowling"];
var bookCovers = ["greatgatsby.jpg", "hamlet.jpg", "janeeyre.jpg", "harrypotter1.jpg"];

var isRegistered = false;

// Initial for loop to display all books in "cover view." 
showCover();
// HINT 1: Reference this when working on the three "View" buttons. 
// HINT 2: You may use jQuery together with JS. For example, this is valid code. You do NOT need to use the $(document).ready() funciton for this case.

//document.querySelector("#button").onclick = function() {
//	$(".something").css("color", "green");
//}

// ------ Start adding your code below -----
document.getElementById("loginButton").onclick = function () {
  // get the input from user
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // check if they are valid
  if (checkUser(username, password)) {
    showDashboard(username);
  }
}

document.getElementById("logoutButton").onclick = function () {
  isRegistered = false;
  hideDashboard();
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

}

// --- theme changer ---
$(document).ready(function () { // just in case
  $(".colorchange").on("click", function () {
    if (this.checked) {
      document.getElementById("dashboard").style.borderColor = this.value;
    }
  });
});

// -- cover view --
document.getElementById("coverViewButton").onclick = function () {
  showCover();
}

// -- list view --
document.getElementById("listViewButton").onclick = function () {
  showList();
}

// -- card view --
document.getElementById("cardViewButton").onclick = function () {
  showCard();
}

// --- functions ---


function checkUser(usernameInput, passwordInput) {
  if (usernameInput == "tommy" && passwordInput == "trojan") {
    isRegistered = true;
  } else if (usernameInput == "darth" && passwordInput == "vader") {
    isRegistered = true;
  } else if (usernameInput.length == 0 && passwordInput.length == 0) {
    alert("Please enter a username and password.");
  } else {
    alert("Your username/password combination is incorrect.")
  }
  return isRegistered;
}

function showDashboard(welcomeInput) {
  $(document).ready(function () {
    $("#dashboard").slideDown();
  });
  document.getElementById("welcome").innerHTML = welcomeInput;
}

function hideDashboard() {
  $(document).ready(function () {
    $("#dashboard").slideUp();
  });
}

function showCover() {
  document.querySelector("#display").innerHTML = "";
  for (var i = 0; i < titles.length; i++) {
    document.querySelector("#display").innerHTML += "<div class='book'><img src=' " + bookCovers[i] + " '/></div>";
  }
}

function showList() {
  document.querySelector("#display").innerHTML = "";
  document.querySelector("#display").innerHTML += "<ul id='list'></ul>";
  for (var i = 0; i < titles.length; i++) {
    document.querySelector("#list").innerHTML += "<li><b>" + titles[i] + "</b> by " + authors[i] + "</li>";
  }
}

function showCard() {
  document.querySelector("#display").innerHTML = "";
  for (var i = 0; i < titles.length; i++) {
    document.querySelector("#display").innerHTML += "<div class='book'><img src=' " + bookCovers[i] + " '/><br><h4>" + titles[i] + "</h4><h6>" + authors[i] + "</h6></div>";
  }
}