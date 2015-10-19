requirejs.config({
  paths: {
    'jquery'             :
      '../lib/jquery/dist/jquery',
    'underscore'         :
      '../lib/underscore/underscore',
    'backbone'           :
      '../lib/backbone/backbone',
    'backbone.babysitter':
      '../lib/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr'     :
      '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.marionette':
      '../lib/marionette/lib/core/backbone.marionette'
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
require([
  'jquery',
  'backbone',
  'backbone.marionette'
], function(
  $,
  Backbone,
  Marionette
) {

  $( document ).ready( function() {
    console.log( 'Document is ready.' );
    console.log( 'jQuery: ', $ );
    console.log( 'Backbone: ', Backbone );
    console.log( 'Marionette: ', Marionette );
  } );

} );
