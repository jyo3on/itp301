document.getElementById("guessButton").onclick = function () {
  // 1. Set the magic number as a variable.
  var magicNumber = 31;
  // 2. Get the user's input and save it in a variable. 
  var userNumber = document.getElementById("userInput").value;
  // 3. Conver user's input into an integer.
  userNumber = parseInt(userNumber);
  // 4. Write some if/else statements. 
  // First, check if user's input is EQUAL TO the magic number. If so, print out the appropriate message in GREEN.
  if (userNumber == magicNumber) {
    document.getElementById("message").innerHTML = "<p class='green'>You got the magic number!</p>"
  }
  // Second, check if user's input is LESS THAN the magic number. If so, print out the appropriate message in RED.
  else if (userNumber < magicNumber) {
    document.getElementById("message").innerHTML = "<p class='red'>Your guess is too low!</p>"
  }
  // Third, check if user's input is GREATER THAN the magic number. If so, print out the appropriate message in RED.
  else if (userNumber > magicNumber) {
    document.getElementById("message").innerHTML = "<p class='red'>Your guess is too high!</p>"
  }
  // Otherwise, something must be wrong. Print out the appropriate message in BOLD and RED.
  else {
    document.getElementById("message").innerHTML = "<p class='red'><strong>Something went wrong : ( </strong></p>"
  }
};