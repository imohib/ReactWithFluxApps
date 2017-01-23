var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentBox = require('./comment-box');
var CommentStore = require('../stores/comments-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'handleDataChange'),
    Reflux.listenTo(CommentStore, 'handleDataChange')
  ],
  getInitialState: function() {
    return {
      image: null,
      comments: []
    }
  },
  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
  },
  handleDataChange: function(eventName, changedData) {
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comments: CommentStore.comments
    });
  },
  renderImageDetail: function() {
    return <div className="panel panel-default">
      <div className="panel-heading">
        <h4>{this.state.image.title}</h4>
      </div>
      <div className="panel-body">
        {this.state.image.animated ? this.renderVideo() : this.renderImage()}
      </div>
      <div className="panel-footer">
        <h5>{this.state.image.description}</h5>
      </div>
      <h3>Comments</h3>
      {this.renderComments()}
    </div>
  },
  renderImage: function() {
    return <img src={this.state.image.link} />;
  },
  renderVideo: function() {
    return <video
      preload="auto"
      autoPlay="autoPlay"
      loop="loop"
      webkit-playsinline>
      <source
        src={this.state.image.mp4}
        type="video/mp4">
      </source>
    </video>
  },
  render: function() {
    return <div className="image-detail">
      {this.state.image ? this.renderImageDetail() : null}
    </div>
  },
  renderComments: function() {
    if(!this.state.comments) {
      return null;
    }
    return <CommentBox comments={this.state.comments} />
  }
});
