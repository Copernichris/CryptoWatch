var tokenKey = "BTC";

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
var newsTitleEl6 = document.getElementById("title-6");
var newDescrEl6 = document.getElementById("news-content-6");
var newsTitleEl7 = document.getElementById("title-7");
var newDescrEl7 = document.getElementById("news-content-7");

var tickerName = document.getElementById("crypto-being-shown");
var percentChange = document.getElementById("crypto-change");
var reddit = document.getElementById("reddit");
var twitter = document.getElementById("twitter");
var urlShares = document.getElementById("urlshares");

//new times
var newTimeEl1 = document.getElementById("news-time-1");
var newTimeEl2 = document.getElementById("news-time-2");
var newTimeEl3 = document.getElementById("news-time-3");
var newTimeEl4 = document.getElementById("news-time-4");
var newTimeEl5 = document.getElementById("news-time-5");
var newTimeEl6 = document.getElementById("news-time-6");
var newTimeEl7 = document.getElementById("news-time-7");


var volumeEl = document.getElementById("volume");
var marketCapEl = document.getElementById("marketCap");
var supplyEl = document.getElementById("supply");


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

//Variable for charts data. Placeholders in place of where api's data would be put in
  var charts = [
    {
      volume: 'placeholder',
      marketCap: 'placeholder',
      supply: 'placeholder'
    }
  ]

// function to save each search
function saveSearchTerm(searchTerm) {

  var prevTerms = JSON.parse(localStorage.getItem("coinsearch"));

  prevTerms.unshift(searchTerm);

  localStorage.setItem("coinsearch", JSON.stringify(prevTerms));
}

// function that grabs the latest saved search
function loadLatestSearch() {

  var latestTerms = pullLatestSearches();

  var recentlySearched = latestTerms[0];

  searchHandler(recentlySearched);
}

// function that saves all searches
function pullLatestSearches() {
  
  var searchHistory = JSON.parse(localStorage.getItem("coinsearch"));

  if (!searchHistory) {
    searchHistory = [""];
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

      }
      recentButtonEl.on("click", (event) => {
        console.log("click", event.target.id)
        saveSearchTerm(event.target.id);
        searchHandler(event.target.id);

    })
    $('.searchedCoins').append(recentButtonEl);
  }
}

// re renders new charts with new data
var chartObject = {};
var chartObjectTwo = {};  

// adding event listener to the button

function searchHandler(symbol) {  

    var tokenKey;        
    tokenKey = symbol


  fetch("https://api.lunarcrush.com/v2?data=assets&key=axnpldsftoa03n17z75cy5r&symbol="+tokenKey+"&interval=day&time_series_indicators=open,close,high,low&data_points=90")
    .then (response => response.json())
    .then (data => {
      percentChange.innerText = data.data[0].percent_change_24h;
      tickerName.innerText = data.data[0].name;
    })


  fetch("https://api.lunarcrush.com/v2?data=assets&key=axnpldsftoa03n17z75cy5r&symbol="+tokenKey+"&interval=day&time_series_indicators=open,close,high,low&data_points=1")
    .then (response => response.json())
    .then (data => {
      reddit.innerText = data.data[0].reddit_posts;
      twitter.innerText = data.data[0].tweets;
      urlShares.innerText = data.data[0].unique_url_shares;
    })
        
  fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol="+tokenKey+"&limit=10&sources=news")
    .then (response => response.json())
    .then (data => {
      newsTitleEl.innerText = data.data[0].title;
      newsTitleEl.setAttribute("href", data.data[0].url);
      newDescrEl.innerText = data.data[0].description;

      newsTitleEl2.innerText = data.data[1].title;
      newsTitleEl2.setAttribute("href", data.data[1].url);
      newDescrEl2.innerText = data.data[1].description;

      newsTitleEl3.innerText = data.data[2].title;
      newsTitleEl3.setAttribute("href", data.data[2].url);
      newDescrEl3.innerText = data.data[2].description;

      newsTitleEl4.innerText = data.data[3].title;
      newsTitleEl4.setAttribute("href", data.data[3].url);
      newDescrEl4.innerText = data.data[3].description;

      newsTitleEl5.innerText = data.data[4].title;
      newsTitleEl5.setAttribute("href", data.data[4].url);
      newDescrEl5.innerText = data.data[4].description;

      newsTitleEl6.innerText = data.data[5].title;
      newsTitleEl6.setAttribute("href", data.data[5].url);
      newDescrEl6.innerText = data.data[5].description;

      newsTitleEl7.innerText = data.data[6].title;
      newsTitleEl7.setAttribute("href", data.data[6].url);
      newDescrEl7.innerText = data.data[6].description;
  })

  //news time
  fetch("https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol="+tokenKey+"&limit=10&sources=news")
  .then (response => response.json())
  .then (data => {
    newTimeEl1.innerText = moment.unix(data.data[0].time).format("MM/DD/YYYY");
    newTimeEl2.innerText = moment.unix(data.data[1].time).format("MM/DD/YYYY");
    newTimeEl3.innerText = moment.unix(data.data[2].time).format("MM/DD/YYYY");
    newTimeEl4.innerText = moment.unix(data.data[3].time).format("MM/DD/YYYY");
    newTimeEl5.innerText = moment.unix(data.data[4].time).format("MM/DD/YYYY");
    newTimeEl6.innerText = moment.unix(data.data[5].time).format("MM/DD/YYYY");
    newTimeEl7.innerText = moment.unix(data.data[6].time).format("MM/DD/YYYY");
  })

  // fetch to render 1st chart
    var xmlhttp = new XMLHttpRequest();
    var api = 'https://api.lunarcrush.com/v2?data=assets&key=axnpldsftoa03n17z75cy5r&symbol='+tokenKey+'&interval=day&time_series_indicators=open,close,high,low&data_points=90';
    xmlhttp.open("GET", api, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200){
              var data = JSON.parse(this.responseText);
              var closes = data.data[0].timeSeries.map(function(elem){
                  return elem.close;
              });
              var dates = data.data[0].timeSeries.map(function(elem){
                  var date = new Date(elem.time *1000);
                  var formattedDate = (date.getMonth()+1)+
                  "/"+date.getDate()+
                   "/"+date.getFullYear();
                  return formattedDate;
              });
              var opens = data.data[0].timeSeries.map(function(elem){
                  return elem.open;
              });
              var ctx = document.getElementById('MyChart').getContext('2d');
              if(chartObject.chart instanceof Chart) {
                chartObject.chart.destroy();
              }
              chartObject.chart = new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: dates,
                      datasets: [{
                          label: 'open',
                          data: opens,
                          backgroundColor: '#2B6FFF',
                          borderColor: '#2B6FFF',
                          borderWidth: 2,
                          pointStyle: 'rectRot',
    
                      },{
                          label: 'close',
                          data: closes,
                          backgroundColor: 'black',
                          borderColor: 'black',
                          borderWidth: 2,
                          pointStyle: 'rectRot'
                      }
                  ]
                  },
                  options: {
                      scales: {
                          y: {
                              beginAtZero: false
                          }
                      }
                  }
              });
     }
  }  

    // fetch to render 2nd chart
  var xmlhttpTwo = new XMLHttpRequest();
  var apiTwo = 'https://api.lunarcrush.com/v2?data=assets&key=axnpldsftoa03n17z75cy5r&symbol='+tokenKey+'&interval=day&time_series_indicators=open,close,high,volume,low&data_points=90';
  xmlhttpTwo.open("GET", apiTwo, true);
  xmlhttpTwo.send();
  xmlhttpTwo.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            var closes = data.data[0].timeSeries.map(function(elem){
                return elem.close;
            });
            var dates = data.data[0].timeSeries.map(function(elem){
                var date = new Date(elem.time *1000);
                var formattedDate = (date.getMonth()+1)+
                "/"+date.getDate()+
                 "/"+date.getFullYear();
                return formattedDate;
            });
            var volume = data.data[0].timeSeries.map(function(elem){
                return elem.volume;
            });
            var ctx = document.getElementById('MyChart-2').getContext('2d');
            if(chartObjectTwo.chart instanceof Chart) {
              chartObjectTwo.chart.destroy();
            }
            chartObjectTwo.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'volume',
                        data: volume,
                        backgroundColor: '#2B6FFF',
                        borderColor: 'black',
                        borderWidth: 2,
                        pointStyle: 'rectRot',
                    }
                ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
   }
}  

  //nomics
  //mktcap
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids="+tokenKey+"&interval=1d,30d&convert=EUR&per-page=100&page=1")
.then(response => response.json())  
.then(data => marketCapEl.innerText = abbreviateNumber(data[0].market_cap))

//volume
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids="+tokenKey+"&interval=1d,30d&convert=EUR&per-page=100&page=1")
.then(response => response.json())  
.then(data => volumeEl.innerText = abbreviateNumber(data[0]["1d"].volume))

//supply
fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids="+tokenKey+"&interval=1d,30d&convert=EUR&per-page=100&page=1")
.then(response => response.json())  
.then(data => supplyEl.innerText = abbreviateNumber(data[0].circulating_supply))
}

// final running of functions
function init() {

  loadLatestSearch();

  displayLatestSearches();

  searchHandler();

  $('#submitBtn').on("click", () => {
    saveSearchTerm($('#search').val().toUpperCase());    
    searchHandler($('#search').val());
  })
}

init();

// defaults to "BTC" when page is first loaded
function defaultTicker() {
  document.getElementById("search").value = "BTC";
  document.getElementById("submitBtn").click();
  document.getElementById("search").value = "";
}

defaultTicker();