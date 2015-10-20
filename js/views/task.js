define(["../app"], function(App) {
  var taskItemView = Marionette.ItemView.extend({
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

  return taskItemView
});
