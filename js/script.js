var tickerEl = document.getElementById("capValue");

fetch("https://api.nomics.com/v1/currencies/ticker?key=bf0f8b8bff53b4098df1df96d4d2d0531a4d8ffa&ids=BNB&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())
  .then(data => tickerEl.innerText = abbreviateNumber(data[0].market_cap))

 
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

