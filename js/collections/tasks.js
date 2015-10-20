define(["../app", "../models/task", "backbone.localstorage"], function(App, Task){
  var Tasks = Backbone.Collection.extend({
    model: Task,
    localStorage: new Backbone.LocalStorage("TasksCollection")
  });

  return Tasks
});
