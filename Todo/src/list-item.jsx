var React = require('react');
var rootURL =  "https://react-507a4.firebaseio.com/";

module.exports = React.createClass({

  componentWillMount: function() {
    this.fb = new Firebase(rootURL + "items/" + this.props.record.id);
  },

  getInitialState: function() {
    return {
      text: this.props.record.item,
      done: this.props.record.done,
      textChanged: false,
    }
  },

  handleClick: function() {
    var complete = !this.state.done;
    this.setState({done: complete});
    //Push data to Firebase.
    this.fb.update({done: complete});
  },

  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  },

  handleClickUndo: function() {
    this.setState({
      text: this.props.record.item,
      textChanged: false
    });
  },

  handleClickUpdate: function() {
    //Push data to Firebase.
    this.fb.update({item: this.state.text});
    this.setState({textChanged: false});
  },

  handleClickDelete: function() {
    //Push data to Firebase.
    this.fb.remove();
  },

  changeButtons: function() {
    if(this.state.textChanged) {
      return <span className="input-group-btn">
        <button className="btn btn-default"
           type="button"
           onClick={this.handleClickUpdate}>
           Update
        </button>
        <button className="btn btn-default"
           type="button"
           onClick={this.handleClickUndo}>
           Undo
        </button>
      </span>
    }
  },

  deleteButton: function() {
    if(this.state.done === true) {
      return <span className="input-group-btn">
        <button className="btn btn-default"
          type="button"
          onClick={this.handleClickDelete}>
          Delete
        </button>
      </span>
    }
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
            onChange={this.handleTextChange}
            className="form-control" />
          {this.changeButtons()}
          {this.deleteButton()}
        </div>
      </div>
    </div>
  }
});
