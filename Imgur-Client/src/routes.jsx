var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Main = require('./components/main');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);
