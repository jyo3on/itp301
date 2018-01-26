  document.querySelector("#getSubstringButton").onclick = function() {
    var startIndex = document.querySelector("#substringStart").value;
    var lastIndex = document.querySelector("#substringEnd").value;
    var text = document.querySelector("#info").innerHTML;

    var newString = text.substring(startIndex, lastIndex);

    console.log(newString);

    document.querySelector("#substringDisplay").innerHTML += newString;
  }

  document.querySelector("#replaceButton").onclick = function() {
    //var greeting = "Hello World!!";
    //var newGreeting = greeting.replace("World", "Trojans");

    //console.log(newGreeting);
    //console.log(greeting);

    var text = document.querySelector("#info").innerHTML;
    var oldString = document.querySelector("#replaceOld").value;
    var newString = document.querySelector("#replaceNew").value;

    // Let's replace!
    var newText = text.replace(oldString, newString);

    // Show on console for testing purposes
    console.log(newText);

    // Display the change on the webpage
    document.querySelector("#info").innerHTML = newText;
  }

  document.querySelector("#highlightButton").onclick = function() {
    var text = document.querySelector("#info").innerHTML;
    var stringToHighlight = document.querySelector("#highlightText").value;

    var newString = "<span class='highlight1'>" + stringToHighlight + "</span>";

    var newText = text.replace(stringToHighlight, newString);
    document.querySelector("#info").innerHTML = newText;
  }

  document.querySelector("#replaceAllButton").onclick = function() {
    var text = document.querySelector("#info").innerHTML;
    var oldString = document.querySelector("#replaceOld").value;
    var newString = document.querySelector("#replaceNew").value;

    /* One way to set up RegEx(뤠졕스) */
    //            var regExPattern = /students/gi; //i는 case-insensitive, g는 global

    /* Second way to set up 뤠쥐엑스 */
    var regExPattern = new RegExp(oldString, "gi");

    var newText = text.replace(regExPattern, newString);
    document.querySelector("#info").innerHTML = newText;
  }

  document.querySelector("#highlightAllButton").onclick = function() {
    var text = document.querySelector("#info").innerHTML;
    var stringToHighlight = document.querySelector("#highlightText").value;

    var newString = "<span class='highlight2'>" + stringToHighlight + "</span>";

    var regExPattern = new RegExp(stringToHighlight, "g");

    var newText = text.replace(stringToHighlight, newString);
    document.querySelector("#info").innerHTML = newText;
  }

