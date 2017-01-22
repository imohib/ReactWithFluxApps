var React = require('react');
var ReactRouter = require('react-router');
var TopicListMixin = require('./topic-list-mixin');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [TopicListMixin],
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
});
