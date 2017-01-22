var ImagePreview = require('./image-preview.jsx');
var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'handleDataChange')],
  getInitialState: function() {
    return {images: []}
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(newProps) {
    Actions.getImages(newProps.params.id);
  },
  handleDataChange: function(eventName, changedData) {
    this.setState({images: changedData});
  },
  render: function() {
    return <div className="topic">
      {this.renderImages()}
    </div>
  },
  renderImages: function() {
    return this.state.images.map(function(image){
      return <ImagePreview key={image.id} {...image}/>
    });
  }
});
