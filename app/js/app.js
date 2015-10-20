define(['backbone.marionette', 'backbone.localstorage'], function(Marionette){
  var App = new Marionette.Application();

  App.on('start', function(){
    Backbone.history.start();


    App.appView = new App.Views.AppView();
    App.appView.render();

    var allTasks = App.Controllers.TasksController.showTasks();
    App.appView.showChildView('tasks', allTasks);

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
      model: App.Models.Task,
      localStorage: new Backbone.LocalStorage("TasksCollection")
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
        this.model.destroy();
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

      initialize: function() {
        var taskCollection = App.appView.getChildView('tasks').collection;
        this.on("create:task", taskCollection.create, taskCollection);
      },

      receiveInput: function(e){
        var ENTER_KEY = 13;
        var newTaskTitle = this.ui.input.val().trim();

        if (e.which === ENTER_KEY && newTaskTitle){
          this.createNewTask({title: newTaskTitle})
        }
      },

      createNewTask: function(newTask){
        this.trigger("create:task", newTask);
        this.ui.input.val("")
      }
    })
  });


//CONTROLLERS
  App.module("Controllers", function(Controllers, App, Backbone, Marionette, _, $){
    Controllers.TasksController = {
      showTasks: function(){
        var tasks = new App.Collections.Tasks();
        tasks.fetch();

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

  //for console debugging
  window.App = App;
  return App
});
