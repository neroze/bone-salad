
define(function (require) {
 	var Products = require('app/products/products');

	 var ProductsDirectory = Backbone.Collection.extend({
	    model: Products,
	    initialize:function(){
          console.log('Loading ProductsDirectory View Collection');
        },
	    defaults:{
	    	title:"Test Products"
	    }
	});

	 return ProductsDirectory;
});