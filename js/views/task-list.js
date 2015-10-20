define(["../app", "../views/task"], function(App, Task) {
  App.module("Views", function(Views, App, Backbone, Marionette, _, $){
    Views.TaskList = Marionette.CompositeView.extend({
      className: "task-list",
      template: "#task-list",
      childView: Task,
      childViewContainer: "ul"
    });

    return Views.TaskList
  });
});
