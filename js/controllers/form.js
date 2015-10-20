define(["../app", "../views/form"], function(App, FormView) {
  var formController = {
    showForm: function(taskCollection){
      return new FormView({taskCollection: taskCollection})
    }
  };

  return formController
});
