

var showAlarm = "block";
var hideAlarm = "none";

document.querySelector("#validateButton").onclick = function() {
    var userInput = document.querySelector("#email-input").value;
    validateEmail(userInput);
}

function validateEmail(email){
    var confirmation = 0;

    //1: Cannot be empty or blank
    if( email == "" || email.length == 0 ) {
        document.querySelector("#alarm1").style.display = showAlarm;
    }
    else {
        document.querySelector("#alarm1").style.display = hideAlarm;
        confirmation ++;
    }

    //2: Must have at least one special character @ or #
    if( email.indexOf("@") == -1 ) { 
        document.querySelector("#alarm2").style.display = showAlarm;
    }
    else {
        document.querySelector("#alarm2").style.display = hideAlarm;
        confirmation ++;
    }

    //3: Email address must have at least one ‘.’ after the ‘@’ sign.
    if( email.lastIndexOf(".") <= email.indexOf("@")) {
        document.querySelector("#alarm3").style.display = showAlarm;
    }
    else {
        document.querySelector("#alarm3").style.display = hideAlarm;
        confirmation ++;
    }

    //4: ALL
    if( confirmation == 3) {
        document.querySelector("#confirmation").style.display = showAlarm;
        document.querySelector("#email-input").value = "";
    }
    else {
        document.querySelector("#confirmation").style.display = hideAlarm;
    }
}
