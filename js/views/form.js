define(["../app"], function(App) {
  var formView = Marionette.ItemView.extend({
    template: "#form-field",
    ui: {
      input: "#new-task"
    },

    events: {
      "keypress #new-task": "receiveInput"
    },

    initialize: function(options) {
      var taskCollection = options.taskCollection;
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
  });

  return formView
});
