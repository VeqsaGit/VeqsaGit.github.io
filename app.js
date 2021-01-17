const fetch = require('node-fetch');

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h')
  .then(response => response.json())
  .then(function(data) {
      console.log(JSON.stringify(data[0]))
})