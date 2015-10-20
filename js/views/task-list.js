define(["../app", "../views/task"], function(App, Task) {
  var taskListView = Marionette.CompositeView.extend({
    className: "task-list",
    template: "#task-list",
    childView: Task,
    childViewContainer: "ul"
  });

  return taskListView
});
