var colorValid = '#0F0';
var colorInvalid = '#F00';

document.querySelector("#password-input").oninput = function () {
  var userInput = document.querySelector("#password-input").value;
  //console.log(userInput);
  validatePass(userInput);
}

function validatePass(password) {

  //1: Cannot be empty or blank
  if (password == "" || password.length == 0) {
    document.querySelector("#rule1").style.backgroundColor = colorInvalid;
  } else {
    document.querySelector("#rule1").style.backgroundColor = colorValid;
  }

  //2: Must contain at least 5 characters
  if (password.length >= 5) {
    document.querySelector("#rule2").style.backgroundColor = colorValid;
  } else {
    document.querySelector("#rule2").style.backgroundColor = colorInvalid;
  }

  //3: Must have at least one special character @ or #
  if (password.indexOf("@") > -1 || password.indexOf("#") > -1) {
    /* indexOf tells you only the first time it happened <-> lastIndexOf tells you only the last time
    if nowhere, they give us -1 negative one */
    document.querySelector("#rule3").style.backgroundColor = colorValid;
  } else {
    document.querySelector("#rule3").style.backgroundColor = colorInvalid;
  }

  //4: Must contain upper & lower case characters
  if (password === password.toLowerCase() || password === password.toUpperCase()) {
    document.querySelector("#rule4").style.backgroundColor = colorInvalid;
  } else {
    document.querySelector("#rule4").style.backgroundColor = colorValid;
  }

  //5: Cannot contain word 'password' lowercase (case insensitive)
  if (password.indexOf("password") > -1) {
    document.querySelector("#rule5").style.backgroundColor = colorInvalid;
  } else {
    document.querySelector("#rule5").style.backgroundColor = colorValid;
  }
}
