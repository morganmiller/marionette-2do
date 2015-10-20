define(["../app"], function(App) {
  App.module("Views", function(Views, App, Backbone, Marionette, _, $){
    Views.AppView = Marionette.LayoutView.extend({
      template: "#app",
      el: "#app-container",

      regions:{
        form: "#form",
        tasks: "#tasks"
      }
    });

    return Views.AppView
  });
});
