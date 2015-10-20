define(["../app"], function(App){
  var Task = Backbone.Model.extend({
    defaults: {title: ""}
  });

  return Task
});
