var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(TopicStore, 'handleDataChange')],

  getInitialState: function() {
    return {topics: []}
  },

  componentWillMount: function() {
    Actions.getTopics();
  },

  render: function() {
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },

  renderTopics: function() {
    return this.state.topics.map(function(topic){
      return <li>
        {topic.name + ' (' + topic.description + ')'}
      </li>
    });
  },

  handleDataChange: function(eventName, changedData) {
    //console.log(changedData);
    this.setState({topics: changedData});
  }
})
