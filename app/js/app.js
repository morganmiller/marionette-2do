define(['backbone.marionette'], function(Marionette){
  var App = new Marionette.Application({
    initialize: function(options){
      console.log("You started your app!")
    }
  });

  App.on('start', function(){
    //require([
    //  "models/task",
    //  "collections/tasks",
    //  "views/app-view",
    //  "views/task",
    //  "views/task-list",
    //  "views/form",
    //  "controllers/tasks",
    //  "controllers/form"
    //], function(){
    //  Backbone.history.start();
    //});

    Backbone.history.start();


    App.appView = new App.Views.AppView();
    console.log(App.appView);
    App.appView.render();

    var newTasks = App.Controllers.TasksController.showTasks();
    App.appView.showChildView('tasks', newTasks);

    var form = App.Controllers.FormController.showForm();
    App.appView.showChildView('form', form)
  });



//MODELS
  App.module("Models", function(Models, App, Backbone, Marionette, _, $){
    Models.Task = Backbone.Model.extend({
      defaults: {title: ""}
    })
  });


//COLLECTIONS
  App.module("Collections", function(Collections, App, Backbone, Marionette, _, $){
    Collections.Tasks = Backbone.Collection.extend({
      model: App.Models.Task
    })
  });

//VIEWS
  App.module("Views", function(Views, App, Backbone, Marionette, _, $){
    Views.AppView = Marionette.LayoutView.extend({
      template: "#app",
      el: "#app-container",

      regions:{
        form: "#form",
        tasks: "#tasks"
      }
    });

    Views.Task = Marionette.ItemView.extend({
      tagName: "li",
      className: 'list-item',
      template: "#task-list-item",

      events: {
        "click button.toggle-completed": "completeTask"
      },

      completeTask: function(e){
        e.preventDefault();
        this.remove();
      },

      remove: function(){
        var task = this;
        this.$el.slideUp(function(){
          Marionette.ItemView.prototype.remove.call(task)
        });
      }
    });

    Views.TaskList = Marionette.CompositeView.extend({
      className: "task-list",
      template: "#task-list",
      childView: Views.Task,
      childViewContainer: "ul"
    });

    Views.Form = Marionette.ItemView.extend({
      template: "#form-field",
      ui: {
        input: "#new-task"
      },

      events: {
        "keypress #new-task": "receiveInput"
      },

      receiveInput: function(e){
        var ENTER_KEY = 13;
        var newTaskTitle = this.ui.input.val().trim();

        if (e.which === ENTER_KEY && newTaskTitle){
          this.createNewTask({title: newTaskTitle})
        }
      },

      createNewTask: function(newTask){
        App.appView.getChildView('tasks').collection.add(newTask);
        this.ui.input.val("")
      }
    })
  });


//CONTROLLERS
  App.module("Controllers", function(Controllers, App, Backbone, Marionette, _, $){
    Controllers.TasksController = {
      showTasks: function(){
        var tasks = new App.Collections.Tasks([
          {title: "Learn Marionette!"},
          {title: "Make a task app"},
          {title: "Remember to eat"}
        ]);

        var tasksList = new App.Views.TaskList({
          collection: tasks
        });

        return tasksList;
      }
    };

    Controllers.FormController = {
      showForm: function(){
        return new App.Views.Form
      }
    };
  });

  //for debugging
  window.App = App;

  return App
});
