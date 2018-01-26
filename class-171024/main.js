var personArray = [];

// Create an object called person
var person = {
  firstName: "Tommy",
  lastName: "Trojan",
  email: "ttrojan@usc.edu",
  phone: {
    cell: "123-123-1234",
    home: "456-456-4567"
  },
  pets: ["Spot", "Bolt"],
  friends: [{
      firstName: "Dwight",
      lastName: "Haha"
    },
    {
      firstName: "Amy",
      lastName: "Song"
    },
    {
      firstName: "Jisu",
      lastName: "Kwon"
    }
  ]
};

console.log(person);
console.log(person.firstName);
console.log(person.phone.cell);
console.log(person.friends[0]);

person.firstName = "Bruin";

// Two ways to 
console.log(person.firstName);
console.log(person["firstName"]);

document.querySelector("#showButton").onclick = function() {
  document.querySelector("#list").innerHTML = "";
  for (var i = 0; i < person.friends.length; i++) {
    document.querySelector("#list").innerHTML += person.friends[i].firstName + " " + person.friends[i].lastName + "<br/>";
  }
}

document.querySelector("#addButton").onclick = function() {
  var firstname = document.querySelector("#firstname").value;
  var lastname = document.querySelector("#lastname").value;
  // Push an object to the array person.friends
  person.friends.push({
    firstName: firstname,
    lastName: lastname
  });
}

document.querySelector("#searchButton").onclick = function() {
  document.querySelector("#list").innerHTML = "";
  var searchTerm = document.querySelector("#searchInput").value;
  var regExp = new RegExp(searchTerm, "gi");
  for (var i = 0; i < person.friends.length; i++) {
    if (regExp.test(person.friends[i].firstName)) {
      document.querySelector("#list").innerHTML += "<span class='hightlight'>" + person.friends[i].firstName + " " + person.friends[i].lastName + "</span><br/>";
    } else {
      document.querySelector("#list").innerHTML += person.friends[i].firstName + " " + person.friends[i].lastName + "<br/>";
    }
  }
}

