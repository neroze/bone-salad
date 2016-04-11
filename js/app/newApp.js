define(function (require) {
	
  	var router = require('app/routers') ;
  	var Bootstrap = {
  		init:function(){
  			var App = this.creatApp();
  			var app = new App({container:"#app"});
  			this.registerEvents(app);
  			app.start();
  		},
  		creatApp:function(){
  			return  Marionette.Application.extend({
			  initialize: function(options) {
			    console.log('My container:', options.container);
			  }
			});
  		},
  		registerEvents:function(app){
        // Event that fired on first
  			app.on("start", function(options){
  			  if (Backbone.history){
  			    Backbone.history.start();
  			    console.log("Loading History");
  			  }
  			
			  });
      // event that start before anything 
			app.on("before:start", function(options){
			  if (Backbone.history){
			       // Backbone.history.start();
			       console.log("Loading Before init / starts History");
				  }
  			});
  		}
  	}


    return {
    	run:function(){
			   Bootstrap.init();
    	}
    }
});