requirejs.config({
  paths: {
    'jquery'               : '../lib/jquery/dist/jquery',
    'underscore'           : '../lib/underscore/underscore',
    'backbone'             : '../lib/backbone/backbone',
    'backbone.babysitter'  : '../lib/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr'       : '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette'  : '../lib/marionette/lib/core/backbone.marionette',
    'backbone.localstorage': '../lib/Backbone.localStorage/backbone.localStorage'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: [ 'jquery', 'underscore' ]
    },
    'backbone.marionette': {
      exports: 'Backbone.Marionette',
      deps: [
        'backbone',
        'backbone.babysitter',
        'backbone.wreqr'
      ]
    }
  },
  deps: [ 'jquery', 'underscore' ]
} );

//test it works
require(['app'], function(App){
  App.start();
});
