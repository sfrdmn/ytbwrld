(function() {
  /* Models */
  var Video = Backbone.Model.extend();
  var VideoCollection = Backbone.Collection.extend({
    model: Video
  })
  var videos = new VideoCollection([]);

  var VideoFrame = Backbone.Model.extend();
  var VideoFrameCollection = Backbone.Collection.extend({
    model: VideoFrame
  });

  (function() {
    /* Initialization */
    var video = $('iframe');
    $(document).bind('click', function() {
      if (video.css('left').replace(/[^-\d\.]/g, '') == 0) {
          video.animate({
          left: '500px'
        }, 5000);
      }
      else {
        video.animate({
          left: '0px'
        }, 5000); 
      }
    });
  })()
})()
