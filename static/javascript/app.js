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
  /* Initialization */
})()
