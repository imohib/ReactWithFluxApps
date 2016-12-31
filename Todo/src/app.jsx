var React = require('react');
var Header = require('./header');

var options = {
  title: 'Add Todo items below',
};

var component = React.createElement(Header, options);
React.render(component, document.querySelector('.container'));
