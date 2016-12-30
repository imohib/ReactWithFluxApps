var React = require('react');

module.exports = React.createClass({

  render: function() {
    return <button
      className="btn btn-default"
      type="button"
      onClick={this.props.whenClicked}>
      {this.props.title} <span className="caret"></span>
    </button>
  }
});
