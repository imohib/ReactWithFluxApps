var React = require('react');
var ListItem = require('./list-item');
var Button = require('./button');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open});
  },

  handleItemClick: function(item) {
    this.setState({
      open: false,
      title: item,
    });
  },

  getInitialState: function() {
    return {open: false}
  },

  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem item={item}
         className={item === this.state.title ? "active" : ""}
         whenItemClicked={this.handleItemClick} />
    }.bind(this));

    return <div className="dropdown">
      <Button title={this.state.title || this.props.title}
         whenClicked={this.handleClick} />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
        {list}
      </ul>
    </div>
  }
});
