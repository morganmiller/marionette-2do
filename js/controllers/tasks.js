define(["../app", "../collections/tasks", "../views/task-list"], function(App, TasksCollection, TaskListView) {
  App.module("Controllers", function(Controllers, App, Backbone, Marionette, _, $) {
    Controllers.TasksController = {
      showTasks: function() {
        var tasks = new TasksCollection([
          {title: "Learn Marionette!"},
          {title: "Make a task app"},
          {title: "Remember to eat"}
        ]);

        var tasksList = new TaskListView({
          collection: tasks
        });

        return tasksList;
      }
    };

    return Controllers.TasksController
  });
});
