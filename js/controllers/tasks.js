define(["../app", "../collections/tasks", "../views/task-list"], function(App, TasksCollection, TaskListView) {
  var tasksController = {
    showTasks: function(){
      var tasks = new TasksCollection;
      tasks.fetch();

      var tasksList = new TaskListView({
        collection: tasks
      });

      return tasksList;
    }
  };
  return tasksController
});
