var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(response) {
        this.topics = response.data;
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function() {
    this.trigger('change', this.topics);
  }
});
