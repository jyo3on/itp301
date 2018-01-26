// iTunes API generally gives a CORS error if we call API like below
//		$.getJSON("https://itunes.apple.com/search?term=beatles", function(json) {
//			console.log(json);
//		});

var userNumber;

document.querySelector("#searchButton").onclick = function () {
  var userInput = document.querySelector("#searchTerm").value;
  userNumber = document.querySelector("#searchLimit").value;

  if (userNumber > 0 && userNumber <= 200) {
    // Create the itunes API endpoint with what user typed in
    var itunesURL = "https://itunes.apple.com/search?";
    itunesURL += "term=" + userInput + "&limit=" + userNumber + "&callback=callbackFunction";

    // Create a <script> tag
    var script = document.createElement("script");
    // Set the src attribute of the <script> tag we just created
    script.src = itunesURL;
    // Append this newly created <script> tag to the <body> tag
    document.body.appendChild(script);

    document.querySelector("#results-table tbody") = "";
  } else {
    alert("invalid number");
  }



}

function callbackFunction(json) {

  document.querySelector("#results-count strong").innerHTML = json.resultCount;

  var output = "";
  for (var i = 0; i < json.results.length; i++) {
    output += "<tr>";
    output += "<td><img src='" + json.results[i].artworkUrl100 + "'/></td>";
    output += "<td>" + json.results[i].artistName + "</td>";
    output += "<td>" + json.results[i].trackName + "</td>";
    output += "<td>" + json.results[i].collectionName + "</td>";
    output += "<td><audio controls src='" + json.results[i].previewUrl + "'></audio></td>";
    output += "<td>" + json.results[i].primaryGenreName + "</td>";
    output += "<td>" + json.results[i].trackPrice + "</td>";
    output += "<td>" + json.results[i].collectionPrice + "</td>";
    output += "</tr>";
  }

  document.querySelector("#results-table tbody").innerHTML = output;

}
