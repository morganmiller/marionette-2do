define(["../app"], function(App) {
  App.module("Views", function(Views, App, Backbone, Marionette, _, $){
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

    return Views.Task
  });
});
