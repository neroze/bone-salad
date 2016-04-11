define(function (require) {
   var ProductsModel = require('app/products/productCollection');
   var ProductsCollection = require('app/products/productCollection');

   var MyView = Marionette.View.extend({
   	 	initialize:function(){
           
          console.log('Loading Product View file');
    	},
		  ui: {
		    "cat": ".dog"
		  },

		  events: {
		    "click @ui.cat": "bark" //is the same as "click .dog":
		  },
		  bark:function(){
		  	alert("bark bark");
		  }
	});

   return MyView;
});