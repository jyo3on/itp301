    //        /* while loop */
    //        while (false) {
    //            // will never get to this code
    //            alert("Annoying alert box");
    //        }
    //
    //        var uberDrivers = 10;
    //        while ( uberDrivers > 0 ){
    //            console.log("There are " + uberDrivers + " Uber drivers available");
    //            uberDrivers--; // this subtracts uber drivers by 1
    //        }
    //        console.log("There are no more uber drivers left.");
    //
    //        /* do while loop */
    //        do {
    //            // this code will get run before checking the condition
    //            alert("Annoying alert");
    //        } while(fales);

    //        /* for loop */
    //        for (var i = 0; i < 10; i++) {
    //            if (i == 5) {
    //                continue; // skip iteration for 5
    //            }
    //            if (i == 8) {
    //                break; // get out of loop
    //            }
    //            console.log("This is message # " + i);
    //        }

    var groceryList = ["apples", "milk", "oranges"]

    document.querySelector("#addButton").onclick = function() {
      // Get what the user just typed in
      var itemInput = document.querySelector("#itemInput").value;

      // Add what the user typed into our array (function)
      addItem(itemInput);
    }

    document.querySelector("#showAllButton").onclick = function() {
      for (var i = 0; i < groceryList.length; i++) {
        document.querySelector("#msg").innerHTML += groceryList[i] + "<br/>";
      }
    }

    document.querySelector("#first3Button").onclick = function() {
      // Clear out the #msg div
      document.querySelector("#msg").innerHTML = "";
      // Display just the first 3 items on the grocery list
      for (var i = 0; i < 3; i++) {
        document.querySelector("#msg").innerHTML += groceryList[i] + "<br/>";
      }
    }

    document.querySelector("#showRecentButton").onclick = function() {
      // Clear out the #msg div
      document.querySelector("#msg").innerHTML = "";
      // Display just the very last items on the grocery list
      var lastIndex = groceryList.length - 1;
      document.querySelector("#msg").innerHTML = groceryList[lastIndex];
    }

    document.querySelector("#randomButton").onclick = function() {
      var randomNumber = Math.random(); // generates decimal number from 0-1
      // LENGTH is USEFUL
      randomNumber = randomNumber * groceryList.length;

      // Lastly, Math.floor()
      randomNumber = Math.floor(randomNumber);

      // Display random item on the grocery list
      document.querySelector("#msg").innerHTML = groceryList[randomNumber];
    }

    function addItem(item) {

      groceryList.push(item);
      console.log(groceryList);

      // Clear the input box so that user can keep adding
      document.querySelector('#itemInput').value = '';

      // Append Message 
      document.querySelector('#msg').innerHTML += '<br/> Added ' + item;

    }

