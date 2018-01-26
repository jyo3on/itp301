// *** JSON (JavaScript Object Notation)
// a lightweight data format standardized (language independent)
// must use double quotes for keys and vaalues
// cannot contain methods - strictly data only
var myJson = {
  "name": "Tommy Trojan",
  "age": 4,
  "job": "CEO"
}
// rest of it it looks very similar with js object
var myObject = {
  name: "Tommy Trojan",
  age: 4,
  job: "CEO"
}
// *** API
// a coding contract that specifies the way a program can interact with an application
// allows us to get information from existing applications such as facebook etc
// Below is tvmaze API giving us JSON structure data (other structure includes XML etc)
$.getJSON("http://api.tvmaze.com/search/shows?q=girls", function(json) {
  console.log(json);
});

document.querySelector("#searchButton").onclick = function() {
  var userInput = document.querySelector("#searchTerm").value;

  $.getJSON("http://api.tvmaze.com/search/shows?q=" + userInput, function(json) {
    console.log(json);
    document.querySelector("#tvshow").innerHTML = "";
    for (var i = 0; i < json.length; i++) {
      document.querySelector("#tvshow").innerHTML += "<b>Title:</b> " + json[i].show.name + "<br/>" + "<img src='" + json[i].show.image.medium + "'>" + "<br/>";
    }
  });
}

