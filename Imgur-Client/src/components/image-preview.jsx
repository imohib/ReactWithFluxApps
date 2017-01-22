var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {hovering: false};
  },
  handleMouseEnter: function() {
    this.setState({hovering: true});
  },
  handleMouseLeave: function() {
    this.setState({hovering: false});
  },
  render: function() {
    return <Link
      to={"images/" + this.props.id}
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.state.hovering && this.props.animated ? this.renderVideo() : this.renderImage()}
      {!this.state.hovering && this.props.animated ? this.renderIcon() : null}
      {this.state.hovering ? this.renderInfo() : null}
    </Link>
  },
  renderInfo: function() {
    return <div className="inset">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>
  },
  renderImage: function() {
    var link = "http://i.imgur.com/" + this.props.id + "h.jpg";
    return <img src={link} />;
  },
  renderVideo: function() {
    return <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-playsinline>
      <source src={this.props.mp4} type="video/mp4"></source>
    </video>
  },
  renderIcon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  }
});
