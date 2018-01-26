<script>
    // iTunes API generally gives a CORS error if we call API like below
    //		$.getJSON("https://itunes.apple.com/search?term=beatles", function(json) {
    //			console.log(json);
    //		});

  </script>


  <script>
    document.querySelector("#searchButton").onclick = function() {
      var userInput = document.querySelector("#searchTerm").value;

      //Use jQuery AJAX method
      $.ajax({
        url: "https://itunes.apple.com/search",
        type: "GET",
        data: {
          term: userInput,
          limit: 10
        },
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "callbackFunction",
        success: function(results) {
          console.log(results);
          if (results.resultCount == 0) {
            document.querySelector("#errorMessage").innerHTML = "No Results Found";
          } else {
            document.querySelector("#errorMessage").innerHTML = "";
          }
        },
        error: function(results) {

        }
      });

      //			// Create the itunes API endpoint with what user typed in
      //			var itunesURL = "https://itunes.apple.com/search?";
      //			itunesURL += "term=" + userInput + "&callback=callbackFunction";
      //			
      //			// Create a <script> tag
      //			var script = document.createElement("script");
      //			// Set the src attribute of the <script> tag we just created
      //			script.src = itunesURL;
      //			// Append this newly created <script> tag to the <body> tag
      //			document.body.appendChild(script);
    }

    function callbackFunction(json) {
      console.log("My function was called!");
      console.log(json);

      document.querySelector("#results-count strong").innerHTML = json.resultCount;

      var output = "";
      for (var i = 0; i < json.results.length; i++) {
        output += "<tr>";
        output += "<td><img src='" + json.results[i].artworkUrl100 + "'/></td>";
        output += "<td>" + json.results[i].artistName + "</td>";
        output += "<td>" + json.results[i].trackName + "</td>";
        output += "<td>" + json.results[i].collectionName + "</td>";
        output += "<td><audio controls src='" + json.results[i].previewUrl + "'></audio></td>";
        output += "</tr>";
      }
      document.querySelector("#results-table tbody").innerHTML = output;

    }

  </script>

  <!-- get around CORS by script tag
	<script src="https://itunes.apple.com/search?term=beatles&callback=callbackFunction"></script>-->
