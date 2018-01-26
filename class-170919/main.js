    var colors = ["red", "blue", "yellow", "purple"];

    console.log(colors);

    // This allows us to retreive items from array
    console.log(colors[9]);

    // Get the length
    console.log(colors.length);

    // Change an item in the array
    colors[2] = "orange";
    console.log(colors);

    // Add another color to the array

    // Remove the last item of the array
    colors.pop();
    console.log(colors);

    // Create an array to keep track of our grocery list
    var groceryList = [];
    // This is another way to create an array but above is simpler
    // var groceryList = new Array();

    document.querySelector("#addButton").onclick = function() {
      //First, get what the user typed into our array
      var userInput = document.querySelector("#userInput").value;

      //Second, add what the user typed into our array
      addItem(userInput);
    }

    document.querySelector("#removeLastButton").onclick = function() {
      // Remove the very last item from the list.
      removeLast();
    }

    document.querySelector("#searchButton").onclick = function() {
      // First, get what the user typed in
      var userInput = document.querySelector("#userInput").value;
      // Second, check if what user typed in exists in the groceryList array
      searchItem(userInput);
    }

    document.querySelector("#lengthButton").onclick = function() {
      document.querySelector("#msg").innerHTML += "<br/> The length of your grocery list is: " + groceryList.length;
    }

    function searchItem(item) {
      // indexOf() searches for the item and returns the index of where the item is located
      var index = groceryList.indexOf(item);

      console.log(index);

      if (index === -1) {
        // -1 means there was no match
        document.querySelector("#msg").innerHTML += "<br/> No match was found";
      } else {
        // otherwise, assume we found a match
        document.querySelector("#msg").innerHTML += "<br/> The item you searched for is located at index #" + index;
      }

    }



    function removeLast() {
      // pop() removes the lastItem and TELLS US WHAT IT REMOVED
      var lastItem = groceryList.pop();
      console.log(groceryList);
      console.log(lastItem);

      // Display message
      document.querySelector("#msg").innerHTML += "<br/> Removed the last item, which was " + lastItem;
    }

    function addItem(item) {
      // Added
      groceryList.push(item);
      console.log(groceryList);

      // Clear out the user input field
      document.querySelector("#userInput").value = "";

      // concactanation
      document.querySelector("#msg").innerHTML += "<br/>Added " + item;
    }
