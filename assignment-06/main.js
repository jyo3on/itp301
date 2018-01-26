websiteNames = [
  "Dribbble",
  "Shashagungun",
  "JyoonSong",
  "Github",
  "Unsplash",
  "Chartmetric",
  "Seoul National University",
  "University of Southern California",
  "Coursera",
  "Udemy",
  "Udacity",
  "Google Developers",
  "Likelion",
  "Codepen",
  "Sungmoon Cho"
];

websiteURLs = [
  "https://dribbble.com",
  "http://shashagungun.com",
  "https://jyoonsong.com",
  "https://github.io",
  "https://unsplash.com",
  "https://chartmetric",
  "https://my.snu.ac.kr",
  "https://my.usc.edu",
  "https://www.coursera.org",
  "https://www.udemy.com",
  "https://www.udacity.com",
  "https://developers.google.com",
  "https://likelion.org",
  "https://codepen.io",
  "https://sungmooncho.com"
];

websiteCategories = [
  "Design",
  "Myself",
  "Myself",
  "Development",
  "Design",
  "Myself",
  "Study",
  "Study",
  "Study",
  "Study",
  "Study",
  "Development",
  "Development",
  "Development",
  "Myself"
];

websiteKeywords = [
  "Design, SNS, Portfolio",
  "Myself, Project, Frontend",
  "Myself, Project, Portfolio",
  "Development, Open Source, Project",
  "Design, Photo, High Quality",
  "Myself, Workplace, Startup",
  "Study, School, SNU",
  "Study, School, USC",
  "Study, Online, Lecture",
  "Study, Online, Video",
  "Study, Online, Video",
  "Development, Google, Android",
  "Development, Club Activity, South Korea",
  "Development, Programming, Hobby",
  "Myself, Boss, Mentor"
];

var query;
var regexp;
var isMatch;

document.querySelector("#searchButton").onclick = function () {
  //initialize variables and result box
  isMatch = false;
  query = document.querySelector("#searchInput").value;
  regexp = new RegExp(query, "gi");
  document.querySelector("#searchResult").innerHTML = "";
  //show result if there is one
  for (i = 0; i < websiteNames.length; i++) {
    if (regexp.test(websiteNames[i]) || regexp.test(websiteCategories[i]) || regexp.test(websiteKeywords[i]) || regexp.test(websiteURLs[i])) {
      showResult(i);
      isMatch = true;
    }
  }
  //show message if there is no result
  if (!isMatch) {
    document.querySelector("#searchResult").innerHTML = "Sorry, No Match";
  }
}

document.querySelector("#showAllButton").onclick = function () {
  document.querySelector("#searchResult").innerHTML = "";
  for (i = 0; i < websiteNames.length; i++) {
    showResult(i);
  }
}

function showResult(i) {
  document.querySelector("#searchResult").innerHTML += "<span>[" + websiteCategories[i] + "] <b> " + websiteNames[i] + "</b> <a target='_blank' href='" + websiteURLs[i] + "'>" + websiteURLs[i] + "</a></span><span>: About " + websiteKeywords[i] + "</span><br/><br/>";
}
