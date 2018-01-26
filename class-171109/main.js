var timeoutID;

document.querySelector("#alertButton").onclick = function() {
  // Tell two things - what happens, how long(ms)
  // window. can be there but not necessary
  timeoutID = setTimeout(function() {
    alert("Hello!");
  }, 3000);
}
document.querySelector("#cancelButton").onclick = function() {
  clearTimeout(timeoutID);
}

// in one second, run the function move
// setTimeout( move, 1000 );
function move() {
  document.querySelector("#box").className += "move";
}

// setInterval( makeAlert }, 1000);
function makeAlert() {
  alert("alert!");
}

var countdownID;

document.querySelector("#startButton").onclick = function() {
  countdownID = setInterval(countDown, 1000);
  document.querySelector("#startButton").disabled = true;
}
document.querySelector("#stopButton").onclick = function() {
  stopCountDown();
  document.querySelector("#countdown").className -= "blink";
  document.querySelector("#startButton").disabled = false;
}

function countDown() {
  var time = document.querySelector("#seconds").innerHTML;
  time = parseInt(time);

  if (time == 1) { // there is one second delay in setInterval
    move();
    celebrate();
  }

  if (time == 0) {
    stopCountDown();
  } else {
    time -= 1;
    document.querySelector("#seconds").innerHTML = time;
  }
}

function stopCountDown() {
  clearInterval(countdownID);
}

function celebrate() {
  document.querySelector("#countdown").className += "blink";
}

document.querySelector("#setButton").onclick = function() {
  var userInput = document.querySelector("#secondsInput").value;
  document.querySelector("#seconds").innerHTML = userInput;
}

