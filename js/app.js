define(['backbone.marionette',
        'views/app-view',
        'controllers/tasks',
        'controllers/form',
        'backbone.localstorage'],
        function(Marionette, AppView, TasksController, FormController){

  var App = new Marionette.Application();

  App.on('start', function(){
    Backbone.history.start();


    App.appView = new AppView();
    App.appView.render();

    var allTasks = TasksController.showTasks();
    App.appView.showChildView('tasks', allTasks);

    var tasksCollection = App.appView.getChildView('tasks').collection;
    var form = FormController.showForm(tasksCollection);
    App.appView.showChildView('form', form)
  });

  //for console debugging
  window.App = App;
  return App
});
