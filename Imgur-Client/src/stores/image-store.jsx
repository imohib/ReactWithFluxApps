var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages: function(topicID) {
    return Api.get('topics/' + topicID)
      .then(function(response) {
        this.images = _.reject(response.data, function(image) {
          return image.is_album;
        });
        this.triggerChange();
      }.bind(this));
  },
  getImage: function(imageID) {
    return Api.get('gallery/image/' + imageID)
      .then(function(response) {
        if(this.images) {
          this.images.push(response.json);
        }
        else {
          this.images = [response.json];
        }
        this.triggerChange();
      }.bind(this));
  },
  find: function(id) {
    this.image = _.find(this.images, {id: id});
    if(this.image) {
      return this.image;
    }
    this.getImage(id);
    return null;
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
