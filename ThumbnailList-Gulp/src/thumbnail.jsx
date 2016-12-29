var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-5 col-md-4">
       <div className="thumbnail">
        <img src={this.props.imageUrl} alt="logo" />
          <div className="caption">
            <h3>{this.props.heading}</h3>
            <p>{this.props.description}</p>
            <p>
              <Badge title={this.props.title} number={this.props.number} />
            </p>
          </div>
      </div>
    </div>
  }
});
