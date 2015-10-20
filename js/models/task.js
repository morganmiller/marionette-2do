define(["../app"], function(App){
  App.module("Models", function(Models, App, Backbone, Marionette, _, $){
    Models.Task = Backbone.Model.extend({
      defaults: {title: ""}
    });

    return Models.Task
  });
});
