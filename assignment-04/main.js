
		// Some guidelines below. You do not have to follow this strictly if you would like to write it in a different way.

		// Use three variables to track the first two numbers and the operation 
		var firstNumber = 0;
        var secondNumber = 0;
        var currentNumber = 0;
		var theMathFunction = "";
        var result = 0;
        var power = false;
        
        /* 
         * Off & On & AC Buttons
        */
        
        document.getElementById("offButton").onclick = function() {
            // the display should be disabled
            document.getElementById("display").disabled = true;
            // the display should display the letters “OFF”
            document.getElementById("display").value = "OFF";
            // change the value of power
            power = false;
            // for credit
            theMathFunction = "";
        }
        document.getElementById("onButton").onclick = function() {
            // the display should be enabled
            document.getElementById("display").disabled = false;
            // clears the display
            reset();
            // change the value of power
            power = true;
            // for credit
            theMathFunction = "";
        }
        document.getElementById("acButton").onclick = function() {
            if (power==false){
            }
            else {
                // clears the display
                reset();
                //for credit
                theMathFunction = "";
            }
        }
        
        /* 
         * Number Buttons
        */
    
        var numberButtons = document.getElementsByClassName("number");
        for (var i = 0; i < numberButtons.length; i++) {
            numberButtons[i].onclick = function (){
                if (power==false){
                }
                else {
                    // Add the clicked number on display
                    document.getElementById("display").value += this.innerHTML;
                }
            }
        };

        /* 
         * Operation Buttons
        */

        document.getElementById("plusButton").onclick = function() {
            if (power==false){
            }
            else {
                if (theMathFunction=="+") {
                    // extra credit
                    currentNumber = document.getElementById("display").value;
                    currentNumber = parseFloat(currentNumber);
                    firstNumber = firstNumber + currentNumber;
                    theMathFunction = "+";
                    reset();
                }
                else if (theMathFunction=="-") {
                    // extra credit
                    currentNumber = document.getElementById("display").value;
                    currentNumber = parseFloat(currentNumber);
                    firstNumber = firstNumber - currentNumber;
                    theMathFunction = "+";
                    reset();
                }
                else {
                    // call function
                    saveFirstNumber("+");
                }
            }
        }
        
        document.getElementById("minusButton").onclick = function() {
            if (power==false){
            }
            else {
                if (theMathFunction=="+") {
                    // extra credit
                    currentNumber = document.getElementById("display").value;
                    currentNumber = parseFloat(currentNumber);
                    firstNumber = firstNumber + currentNumber;
                    theMathFunction = "-";
                    reset();
                }
                else if (theMathFunction=="-") {
                    // extra credit
                    currentNumber = document.getElementById("display").value;
                    currentNumber = parseFloat(currentNumber);
                    firstNumber = firstNumber - currentNumber;
                    theMathFunction = "-";
                    reset();
                }
                else {
                    // call function
                    saveFirstNumber("-");
                }
            }
        }
        
        document.getElementById("multiplyButton").onclick = function() {
            if (power==false){
            }
            else {
                // call function
                saveFirstNumber("*");
            }
        }
        
        document.getElementById("divideButton").onclick = function() {
            if (power==false){
            }
            else {
                // call function
                saveFirstNumber("/");
            }
        }

        /* 
         * Equal Button
        */

        document.getElementById("equalButton").onclick = function() {
            if (power==false){
            }
            else {
                // perform calculation
                performCalculation();
            }
        }
        
        
        /* 
         * Functions
        */

		function reset() {
			// Clear all variables
            document.getElementById("display").value = ""
		}

		function saveFirstNumber( mathFunction ) {
			// Save the first number
            firstNumber = document.getElementById("display").value;
            firstNumber = parseFloat(firstNumber);
			// Save the selected math function (+,-,/,*)
            theMathFunction = mathFunction;
			// Clear the display
            reset();
		}

		function performCalculation(  ) {
            // Save the second number
            secondNumber = document.getElementById("display").value;
            // Change the variable type
            secondNumber = parseFloat(secondNumber);
            // Calculate
			if ( theMathFunction == "+" ) {
                result = firstNumber + secondNumber;
            }
            else if ( theMathFunction == "-" ) {
                result = firstNumber - secondNumber;
            }
            else if ( theMathFunction == "*" ) {
                result = firstNumber * secondNumber;
            }
            else if ( theMathFunction == "/" ) {
                result = firstNumber / secondNumber;
            }
            else {
                console.log("Something is wrong");
            }
			// Display result
            reset();
            document.getElementById("display").value = result;
		}
        
        /* 
         * Not a Number
        */
        
        document.getElementById("display").onchange = function(){
            if ( isNaN(document.getElementById("display").value) == true ){
                alert("Not a Number");
                reset();
            }
        };
        