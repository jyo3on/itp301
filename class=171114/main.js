/*
 * Cookies
 */

document.querySelector("#saveCookiesButton").onclick = function() {
  // Save user inputs
  var usernameInput = document.querySelector("#cookieUsername").value;
  var ageInput = document.querySelector("#cookieAge").value;
  var bgInput = document.querySelector("#cookieBgColor").value;

  // Create cookie here - expires & domain required
  var expiredDate = new Date();
  expiredDate.setHours(expiredDate.getHours() + 10);

  document.cookie = "username=" + usernameInput + ";expires=" + expiredDate.toUTCString(); + "domain=scf.usc.edu;path=/"
  document.cookie = "age=" + ageInput + ";expires=" + expiredDate.toUTCString(); + "domain=scf.usc.edu;path=/"
  document.cookie = "bgColor=" + bgInput + ";expires=" + expiredDate.toUTCString(); + "domain=scf.usc.edu;path=/"

  document.querySelector("#cookieUsername").value = "";
  document.querySelector("#cookieAge").value = "";
  document.querySelector("#cookieBgColor").value = "";
}

document.querySelector("#alertCookiesButton").onclick = function() {
  alert(document.cookie);
}
document.querySelector("#displayCookiesButton").onclick = function() {
  var username = getCookieName("username");
  var age = getCookieName("age");
  var bgColor = getCookieName("bgColor");

  document.querySelector("#cookieUsername").value = username;
  document.querySelector("#cookieAge").value = age;
  document.querySelector("#cookieBgColor").value = bgColor;
  document.querySelector("#cookies-container").style.backgroundColor = bgColor;
}

function getCookieName(cookieName) {
  // Parse the cookie string to get the information I need
  var cookies = document.cookie;
  var cookieValue = "";
  cookies = cookies.split(";"); // cookies = ["username=j", "age=22"]
  for (var i = 0; i < cookies.length; i++) {
    var temp = cookies[i].split("="); // temp = ["username", "j"]
    if (temp[0].trim() == cookieName) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
}

/*
 * Local Storage
 */

document.querySelector("#saveLsButton").onclick = function() {

  var usernameInput = document.querySelector("#lsUsername").value;
  var ageInput = document.querySelector("#lsAge").value;
  var bgInput = document.querySelector("#lsBgColor").value;

  // Set local storage here
  localStorage.setItem("username", usernameInput);
  localStorage.setItem("age", ageInput);
  localStorage.setItem("bgColor", bgInput);

  document.querySelector("#lsUsername").value = "";
  document.querySelector("#lsAge").value = "";
  document.querySelector("#lsBgColor").value = "";
}

document.querySelector("#alertLsButton").onclick = function() {
  console.log(localStorage);
}
document.querySelector("#displayLsButton").onclick = function() {
  var username = localStorage.getItem("username");
  var age = localStorage.getItem("age");
  var bgColor = localStorage.getItem("bgColor");

  document.querySelector("#lsUsername").value = username;
  document.querySelector("#lsAge").value = age;
  document.querySelector("#lsBgColor").value = bgColor;
  document.querySelector("#localStorage-container").style.backgroundColor = bgColor;
}
document.querySelector("#saveSsButton").onclick = function() {
  var usernameInput = document.querySelector("#ssUsername").value;
  var ageInput = document.querySelector("#ssAge").value;
  var bgInput = document.querySelector("#ssBgColor").value;
  // Set session storage here
  sessionStorage.setItem("username", usernameInput);
  sessionStorage.setItem("age", ageInput);
  sessionStorage.setItem("bgColor", bgInput);

  document.querySelector("#ssUsername").value = "";
  document.querySelector("#ssAge").value = "";
  document.querySelector("#ssBgColor").value = "";
}
document.querySelector("#alertSsButton").onclick = function() {
  console.log(sessionStorage);
}
document.querySelector("#displaySsButton").onclick = function() {
  var username = sessionStorage.getItem("username");
  var age = sessionStorage.getItem("age");
  var bgColor = sessionStorage.getItem("bgColor");

  document.querySelector("#ssUsername").value = username;
  document.querySelector("#ssAge").value = age;
  document.querySelector("#ssBgColor").value = bgColor;
  document.querySelector("#sessionStorage-container").style.backgroundColor = bgColor;
}

// Adding contacts
var contactsList = [{
    firstname: "Michael",
    lastname: "Scott"
  },
  {
    firstname: "Dwight",
    lastname: "Schrute"
  }
];

document.querySelector("#addButton").onclick = function() {
  var firstNameInput = document.querySelector("#firstname").value;
  var lastNameInput = document.querySelector("#lastname").value;

  // Add new contact to array called contactsList
  contactsList.push({
    firstname: firstNameInput,
    lastname: lastNameInput
  });

  // Add my contactsList to local storage - only strings
  var contactsListConverted = JSON.stringify(contactsList);
  localStorage.setItem("contacts", contactsListConverted);
}
document.querySelector("#seeAllButton").onclick = function() {

  var storedContacts = JSON.parse(localStorage.getItem("contacts"));
  for (var i = 0; i < storedContacts.length; i++) {
    document.querySelector("#list").innerHTML += "<li>" + storedContacts[i].firstname + " " + storedContacts[i].lastname + "</li>";
  }
}

