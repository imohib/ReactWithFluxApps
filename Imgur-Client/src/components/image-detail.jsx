var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');
ImageStore = require('../stores/image-store');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'handleDataChange')],
  getInitialState: function() {
    return {image: null}
  },
  componentWillMount: function() {
    Actions.getImage(this.props.params.id)
  },
  handleDataChange: function(eventName, changedData) {
    this.setState({
      image: ImageStore.find(this.props.params.id)
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
    return <div>
      {this.state.image ? this.renderImageDetail() : null}
    </div>
  }
});
