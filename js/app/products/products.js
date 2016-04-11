define(function (require) {
    var Product = Backbone.Model.extend({
    defaults: {
        
    },
    initialize:function(){
           
          console.log('Loading Product Model file');
    },
	});

	return Product;
});