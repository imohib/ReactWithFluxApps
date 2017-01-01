var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  renderList: function() {
    if(!this.props.records) {
      return <h3 className="text-center">Add a todo item to get started.</h3>
    }
    else {
      var list = [];
      for(var recordId in this.props.records) {
        var record = this.props.records[recordId];
        record.id = recordId;
        list.push(
          <ListItem
          record={record}
          key={recordId} />
        );
      }
      return <div className={"content " + (this.props.records ? "loaded" : "")}>
        {list}
      </div>
    }
  },

  render: function(){
    return this.renderList();
  }
});
