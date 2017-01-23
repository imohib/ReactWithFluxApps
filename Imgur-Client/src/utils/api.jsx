var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '6e8897a060637eb'; // + apiKey

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID 6e8897a060637eb'
      }
    })
    .then(function(response) {
      var res = response.json();
      console.log(res);
      return res;
    });
  }
};
