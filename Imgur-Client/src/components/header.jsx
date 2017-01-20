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

  handleDataChange: function(eventName, changedData) {
    //console.log(changedData);
    this.setState({topics: changedData});
  },

  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic){
      return <li key={topic.id}>
        <Link
          to={"topics/" + topic.id}>
          {topic.name}
        </Link>
      </li>
    });
  },

  render: function() {
    return <div className="red">
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/"
            className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics()}
          </ul>
        </div>
      </nav>
    </div>
  }
});
