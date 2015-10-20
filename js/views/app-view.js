define(["../app"], function(App) {
  var appView = Marionette.LayoutView.extend({
    template: "#app",
    el: "#app-container",

    regions:{
      form: "#form",
      tasks: "#tasks"
    }
  });

  return appView
});
