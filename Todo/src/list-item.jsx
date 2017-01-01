var React = require('react');
var rootURL =  "https://react-507a4.firebaseio.com/";

module.exports = React.createClass({

  componentWillMount: function() {
    this.fb = new Firebase(rootURL + "items/" + this.props.record.id);
  },

  getInitialState: function() {
    return {
      text: this.props.record.item,
      done: this.props.record.done
    }
  },

  handleClick: function() {
    var complete = !this.state.done;
    this.setState({done: complete});
    //Push data to Firebase.
    this.fb.update({done: complete});
  },

  render: function(){
    return <div className="row">
      <div className="col-md-8">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox"
              checked={this.state.done}
              onChange={this.handleClick} />
          </span>
          <input type="text"
            value={this.state.text}
            className="form-control" />
        </div>
      </div>
    </div>
  }
});
