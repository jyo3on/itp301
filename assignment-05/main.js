/* 
 * Two Arrays - with at least three quotes and authors 
 */
var quotes = [
  "I'm so glad I live in a world where there are Octobers.",
  "Design is not just what it looks like and feels like. Design is how it works.",
  "Be yourself; everyone else is already taken."
];
var authors = [
  "L.M. Montgomery",
  "Steve Jobs",
  "Oscar Wilde"
];

/* 
 * Buttons 
 */
// Tweet Button
document.getElementById("tweetButton").onclick = function() {
  document.getElementById("tweetBox").innerHTML = "";
  var quote = document.getElementById("quoteInput").value;
  var author = document.getElementById("authorInput").value;
  if (isEmpty(quote) || isEmpty(author)) {
    alert("Error! Empty Input :-)");
    return;
  }
  addTweet(quote, author);
}
// Oldest to Newest
document.getElementById("showOldFirst").onclick = function() {
  document.getElementById("tweetBox").innerHTML = "";
  for (var i = 0; i < quotes.length; i++) {
    document.getElementById("tweetBox").innerHTML +=
      "<blockquote>" +
      "<p>" + quotes[i] + "</p>" +
      "<footer>" + authors[i] + "</footer>" +
      "</blockquote>";
  }
}
// Newest to Oldest
document.getElementById("showNewFirst").onclick = function() {
  document.getElementById("tweetBox").innerHTML = "";
  for (var i = quotes.length - 1; i >= 0; i--) {
    document.getElementById("tweetBox").innerHTML +=
      "<blockquote>" +
      "<p>" + quotes[i] + "</p>" +
      "<footer>" + authors[i] + "</footer>" +
      "</blockquote>";
  }
}
// Random Button
document.querySelector("#randomButton").onclick = function() {
  document.getElementById("tweetBox").innerHTML = "";
  var randomNumber = Math.random();
  randomNumber = randomNumber * quotes.length;
  randomNumber = Math.floor(randomNumber);
  document.getElementById("tweetBox").innerHTML +=
    "<blockquote>" +
    "<p>" + quotes[randomNumber] + "</p>" +
    "<footer>" + authors[randomNumber] + "</footer>" +
    "</blockquote>";
}

/* 
 * Functions 
 */
// add new tweet
function addTweet(quote, author) {
  quotes.push(quote);
  authors.push(author);
  document.getElementById("tweetBox").innerHTML +=
    "<blockquote>" +
    "<p>" + quote + "</p>" +
    "<footer>" + author + "</footer>" +
    "</blockquote>";
  document.getElementById("quoteInput").value = "";
  document.getElementById("authorInput").value = "";
}
// check empty string
function isEmpty(str) {
  return (!str || str.length == 0);
}