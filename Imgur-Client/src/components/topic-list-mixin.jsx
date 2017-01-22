var Actions = require('../actions');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');

module.exports = {
  mixins: [Reflux.listenTo(TopicStore, 'handleDataChange')],
  getInitialState: function() {
    return {topics: []}
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  handleDataChange: function(eventName, changedData) {
    //console.log(changedData);
    this.setState({topics: changedData});
  }
}
