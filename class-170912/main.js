var age = 24; //quotes -> becomes string


if (age < 18) {
  console.log("Sorry, you are not old enough to vote or drink");
} else if (age < 21) { // age>=18 already covered
  console.log("You can vote, but you cannot drink");
} else {
  console.log("Cool, you can vote and drink! YAY");
}

document.getElementById("checkButton").onclick = function() {
  // First, get the user's input
  var userAge = document.getElementById("userInput").value;
  console.log(userAge);
  userAge = parseInt(userAge);
  console.log(userAge);

  // Second, check if user is old enough to vote or drink
  if (userAge < 18) {
    //                alert("Sorry, you are not old enough to vote or drink");
    document.getElementById("message").innerHTML = "Sorry, you are not old enough to drink.";
  } else if (userAge < 21) {
    //                alert("You can vote, but you cannot drink");
    document.getElementById("message").innerHTML = "Sorry, you are not old enough to drink.";
  } else {
    //                alert("Cool, you can vote and drink! YAY");
    document.getElementById("message").innerHTML = "Sorry, you are not old enough to drink.";
  }
}
document.getElementById("submitButton").onclick = function() {
  //First, get the year that user typed in
  var year = document.getElementById("year").value;
  //Second, convert the year into a number
  year = parseInt(year);
  //Third, calculate user's age by subtracting current year and the year user put in
  var currentYear = 2017;
  var theirAge = currentYear - year;
  // Lastly, clear the input
  document.getElementById("year").value = "";

  //now put it in the age input box
  document.getElementById("userInput").value = theirAge;
}

