/* Model */
Video = Backbone.Model.extend();
VideoCollection = Backbone.Collection.extend({
  model: Video
})

videos = new VideoCollection([]);
