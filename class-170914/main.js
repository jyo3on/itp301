document.getElementById("miles-input").oninput = function () {
  // oninput : relatively new! realtime!

  var miles = document.getElementById("miles-input").value;
  // HTML attribute becomes javascript object

  miles = parseFloat(miles);
  // convert string into float in order to do calculation
  // if it's integer it ignores the decimals

  miles = miles * 1.609;
  // before : miles = whatever user put in
  // after : miles = replaced with miles into kilo

  document.getElementById("km-conversion").value = miles;
  // NaN = Not a Number
}

document.getElementById("km-input").oninput = function () {
  convertToMiles(this.value);
}

document.getElementById("checkButton").onclick = function () {
  var percentage = document.getElementById("numGrade").value;
  percentage = parseFloat(percentage);

  checkGrade(percentage);
}

// --- Calculator Addition

// 1. We will need two numbers
var num1;
var num2;

// 2. When I click on "+" button, save the first number.
document.getElementById("addButton").onclick = function () {
  num1 = document.getElementById("calculatorInput").value;
  num1 = parseFloat(num1);
  console.log(num1);
  document.getElementById("calculatorInput").value = ""; // clear the input field
}

// 3. When I click on "=" button, save the second number
document.getElementById("equalButton").onclick = function () {
  num2 = document.getElementById("calculatorInput").value;
  num2 = parseFloat(num2);

  var total = num1 + num2;
  console.log(total);
}

// --- Function Declarations

function convertToMiles(kilos) {
  //            var kilos = document.getElementById("km-input").value;
  kilos = parseFloat(kilos);
  kilos = kilos / 1.609;
  document.getElementById("miles-conversion").value = kilos;
}

function checkGrade(newPercentage) {
  // if statement that VALIDATEs the input
  if (newPercentage > 100 || newPercentage < 0 || isNaN(newPercentage)) {
    alert("Invalid percentage. Try again.")
    return; // special keyword in JS: Anything past this will not run
  }
  if (newPercentage >= 90) {
    alert("You got an A!");
  } else if (newPercentage >= 80) {
    alert("You got a B!");
  } else if (newPercentage >= 70) {
    alert("You cot a C!");
  } else if (newPercentage >= 60) {
    alert("You got a D!");
  } else {
    alert("You failed :(")
  }
}
