var React = require('react');
var Firebase = require('firebase');

module.exports = React.createClass({
  getInitialState: function() {
    return {text: ""}
  },
  handleClickAdd: function() {
    //Push data to Firebase.
    this.props.itemStore.push({
      item: this.state.text,
      done: false
    });
    this.setState({text: ""});
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value
    });
  },
  render: function(){
    return <div className="row">
      <div className="col-md-8">
        <div className="input-group">
          <input type="text"
             className="form-control"
             placeholder="Add a Todo item here..."
             value={this.state.text}
             onChange={this.handleTextChange}/>
          <span className="input-group-btn">
            <button className="btn btn-default"
               type="button"
               onClick={this.handleClickAdd}>
               Add
            </button>
          </span>
        </div>
      </div>
    </div>
  }
});
