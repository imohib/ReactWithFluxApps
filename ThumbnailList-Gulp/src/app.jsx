var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailPropsData: [
    {
      imageUrl: 'http://formatjs.io/img/react.svg',
      heading: 'Learn you React for greater good!',
      description: 'Learn ReactJS with Flux. It is amazing technology.',
      title: 'Tutorial',
      number: 78,
    },
    {
      imageUrl: 'http://brunch.io/images/others/gulp.png',
      heading: 'Gulp will speed up your development workflow. It is amazing technology.',
      description: 'Learn Gulp.',
      title: 'Tutorial',
      number: 14,
    }
  ]
};

var thumbnailList = React.createElement(ThumbnailList, options);
React.render(thumbnailList, document.querySelector('.target'));
