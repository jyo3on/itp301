var query;
var regexp;
var isMatch;
var animes = [{
    source: "img/movie1.jpg",
    caption: "<b>Spirited Away</b><br/>Miyazaki Hayao<br/>2001",
    tag: "Japanese Fantasy Taiwan"
  },
  {
    source: "img/movie2.jpg",
    caption: "<b>Kiki's Delivery Service</b><br/>Miyazaki Hayao<br/>1989",
    tag: "Japanese Witch Flight"
  },
  {
    source: "img/movie3.jpg",
    caption: "<b>My Neighbor Totoro</b><br/>Miyazaki Hayao<br/>1988",
    tag: "Japanese Cute Child"
  },
  {
    source: "img/movie4.jpg",
    caption: "<b>Howl's Moving Castle</b><br/>Miyazaki Hayao<br/>2004",
    tag: "Japanese Castle Romance"
  },
  {
    source: "img/movie5.jpg",
    caption: "<b>Princess Mononoke</b><br/>Miyazaki Hayao<br/>1997",
    tag: "Japanese Ancient Nature"
  },
  {
    source: "img/movie6.jpg",
    caption: "<b>Castle in the Sky</b><br/>Miyazaki Hayao<br/>1986",
    tag: "Japanese Romance Machine"
  },
  {
    source: "img/movie7.jpg",
    caption: "<b>Ponyo</b><br/>Miyazaki Hayao<br/>2008",
    tag: "Japanese Cute Ocean"
  },
  {
    source: "img/movie8.jpg",
    caption: "<b>The Girl Who Leapt Through Time</b><br/>Mamoru Hosoda<br/>2006",
    tag: "Japanese Romance Time"
  },
  {
    source: "img/movie9.jpg",
    caption: "<b>Your Name</b><br/>Makoto Shinkai<br/>2001",
    tag: "Japanese Romance Meteor"
  },
  {
    source: "img/movie10.jpg",
    caption: "<b>The Cat Returns</b><br/>Miyazaki Hayao<br/>2002",
    tag: "Japanese Cat Fantasy"
  },
];

// init
for (var i = 0; i < animes.length; i++) {
  showAnime(i);
}

// search
document.querySelector("#searchButton").onclick = function() {
  //initialize variables and result box
  isMatch = false;
  query = document.querySelector("#searchInput").value;
  regexp = new RegExp(query, "gi");
  //show result if there is one
  for (var i = 0; i < animes.length; i++) {
    if (regexp.test(animes[i].caption) || regexp.test(animes[i].tag)) {
      document.querySelector("#movie" + (i + 1)).classList.add("colored");
      isMatch = true;
    } else {
      document.querySelector("#movie" + (i + 1)).classList.remove("colored");
    }
  }
  //show message if there is no result
  if (!isMatch) {
    alert("Sorry, No Match");
  }
  //show message if wrong input
  if (query.length == 0 || query == "") {
    alert("Blank!");
  }
}

function showAnime(j) {
  document.querySelector("#movie" + (j + 1)).innerHTML += "<img src='" + animes[j].source + "'/><p>" + animes[j].caption + "</p>";
}

