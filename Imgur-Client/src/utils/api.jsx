var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '6e8897a060637eb';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      header: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};
