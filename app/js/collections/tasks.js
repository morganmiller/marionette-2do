define(["app", "../models/task"], function(App, Task){
  App.module("Collections", function(Collections, App, Backbone, Marionette, _, $){
    Collections.Tasks = Backbone.Collection.extend({
      model: Task
    });

    return Collections.Tasks
  });
});
