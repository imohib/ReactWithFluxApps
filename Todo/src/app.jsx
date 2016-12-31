var React = require('react');
var Header = require('./header');
var Reactfire = require('reactfire');
var rootURL =  "https://react-507a4.firebaseio.com/";

var TodoPanel = React.createClass({
  mixins: [Reactfire],

  componentWillMount: function() {
    this.fb = new Firebase(rootURL + "items/");
    this.bindAsObject(this.fb, "items");
  },

  render: function(){
    return <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">TODO List</h3>
      </div>
      <div className="panel-body">
        <Header itemStore={this.firebaseRefs.items}/>
      </div>
      <hr />
    </div>
  }
});

var component = React.createElement(TodoPanel, {});
React.render(component, document.querySelector('.container'));
