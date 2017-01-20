var Actions = require('../actions');
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TopicStore = require('../stores/topic-store');
var Link = ReactRouter.Link;

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
      {this.renderTopics()}
    </div>
  },

  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic){
      return <Link to={"topics/" + topic.id}
        className="list-group-item"
        key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
      </Link>
    });
  },

  handleDataChange: function(eventName, changedData) {
    //console.log(changedData);
    this.setState({topics: changedData});
  }
})
