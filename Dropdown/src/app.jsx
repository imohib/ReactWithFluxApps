var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Select a dessert',
  items: [
      'Apple pie',
      'Peach cobbler',
      'Coconut pie'
  ]
};

var component = React.createElement(Dropdown, options);
React.render(component, document.querySelector('.target'));
