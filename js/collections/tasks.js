define(["../app", "../models/task"], function(App, Task){
  var Tasks = Backbone.Collection.extend({
    model: Task
  });

  return Tasks
});
