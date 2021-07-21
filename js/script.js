var tickerEl = document.getElementById("capValue");
var newsTitleEl = document.getElementById("title-1");
var newDescrEl = document.getElementById("news-content-1");
var newsTitleEl2 = document.getElementById("title-2");
var newDescrEl2 = document.getElementById("news-content-2");
var newsTitleEl3 = document.getElementById("title-3");
var newDescrEl3 = document.getElementById("news-content-3");
var newsTitleEl4 = document.getElementById("title-4");
var newDescrEl4 = document.getElementById("news-content-4");
var newsTitleEl5 = document.getElementById("title-5");
var newDescrEl5 = document.getElementById("news-content-5");

var volumeEl = document.getElementById("volume");
var marketCapEl = document.getElementById("marketCap");
var supplyEl = document.getElementById("supply");

//mktcap
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())  
  .then(data => marketCapEl.innerText = abbreviateNumber(data[0].market_cap))

//volume
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())  
  .then(data => volumeEl.innerText = abbreviateNumber(data[0]["1d"].volume))

//supply
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())  
  .then(data => supplyEl.innerText = abbreviateNumber(data[0].circulating_supply))

//test call
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())  
  .then(data => console.log(data))

 function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B","T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
  
    newValue = newValue.toPrecision(3);
  
    newValue += suffixes[suffixNum];
    return newValue;
  
  }

fetch("https://api.nomics.com/v1/exchange-rates/history?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z")
  .then(response => response.json())
  .then(data => console.log(data))

  TESTER = document.getElementById('charts');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );

//Variable for charts data. Placeholders in place of where api's data would be put in
  var charts = [
    {
      volume: 'placeholder',
      marketCap: 'placeholder',
      supply: 'placeholder'
    }
  ]

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newsTitleEl.innerText = data.data[0].title)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newDescrEl.innerText = data.data[0].description)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newsTitleEl2.innerText = data.data[1].title)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newDescrEl2.innerText = data.data[1].description)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newsTitleEl3.innerText = data.data[2].title)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newDescrEl3.innerText = data.data[2].description)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newsTitleEl4.innerText = data.data[3].title)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newDescrEl4.innerText = data.data[3].description)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newsTitleEl5.innerText = data.data[4].title)

fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=BTC&limit=10&sources=news")
  .then (response => response.json())
  .then (data => newDescrEl5.innerText = data.data[4].description)


// function that saves all searches
function pullLatestSearches() {
  
  var searchHistory = JSON.parse(localStorage.getItem("coinsearch"));

  if (!searchHistory) {
    searchHistory = ["BTC"];
    localStorage.setItem("coinsearch", JSON.stringify(searchHistory));
    return searchHistory;
  } else {
      return searchHistory;
  }
}

  // adding button elements for recent searches
function displayLatestSearches() {
  // clears text within container
  $('#searchedCoins').text("");

  // grabs the recent search
 var searchHistory = pullLatestSearches();

  for (var i = 0; i < 8; i++) {

      if(searchHistory[i]) {
        recentButtonEl = $("<button></button>").text(searchHistory[i]);
        recentButtonEl.addClass("previousSearchButton");
        recentButtonEl.attr("id", searchHistory[i])

        recentButtonEl.on("click", (event) => {
          saveSearchTerm(event.target.id);
          // function that is displaying everything(event.target.id);


      })

        $('.searchedCoins').append(recentButtonEl);

    }
  }
}

// function to save each search
function saveSearchTerm(searchTerm) {

  var prevTerms = JSON.parse(localStorage.getItem("coinsearch"));

  prevTerms.unshift(searchTerm);

  localStorage.setItem("coinsearch", JSON.stringify(prevTerms));
}

function loadLatestSearch() {

  var latestTerms = pullLatestSearches();

  var recentlySearched = latestTerms[0];

  // function that runs everything(recentlySearched);
}

// adding event listener to the button
function searchHandler() {
  $('#submitBtn').on("click", () => {
    saveSearchTerm($('#search').val());
    // function that is running everything($('#search').val());
  })
}

// final running of functions
function init() {

  loadLatestSearch();

  displayLatestSearches();

  searchHandler();
}

init();
