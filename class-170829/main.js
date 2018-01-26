$(document).ready(function () {
  /* Finding Elements */
  console.log("jQuery is ready!");
  console.log($("h1"));
  console.log($("h2"));
  console.log($("#title"));
  console.log($(".places-ive-been"));
  /* Changing Elements */
  $("#title").css({
    "color": "red",
    "textDecoration": "underline",
    "fontSize": "60px"
  }); // dash into Capital Letter
  $("#title").text("<p>My Diary</p>");
  $(".cities").html("<p>City</p>");
  /* Listening Events */
  $("#title").click(function () {
    $(".cities").css("color", "blue");
    $("#title").css("color", "orange");
  });
  $("#london").click(function () {
    $(".location").attr("src", "images/london.jpg")
  });
  $("#paris").click(function () {
    $(".location").attr("src", "images/paris.jpg")
  });
  $("#istanbul").click(function () {
    $(".location").attr("src", "images/istanbul.jpg")
  });
  $("button").click(function () {
    $(".location").addClass("opaque");
  });
});
