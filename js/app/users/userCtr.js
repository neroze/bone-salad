

 define(function (require) {
 	var User = require('app/users/user');

    

	 var Directory = Backbone.Collection.extend({
	    model: User,
	    initialize:function(){
           
          console.log('Loading user View Collection');
        },
	    defaults:{
	    	title:"test"
	    }
	});

	 return Directory;
});