var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TopicListMixin = require('./topic-list-mixin');

module.exports = React.createClass({
  mixins: [TopicListMixin],
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic){
      return <li key={topic.id}>
        <Link
          activeClassName="active"
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
