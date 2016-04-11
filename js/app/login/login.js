define(function (require) {
    var home = require('app/home/home');
  
    return {
    	test:function(){
    		home.test();
    	},
 		sayLogin:function(){
 			console.log("Say Login Again");
 			$('#log').html("This is text content from \"Login\" module ");
 		}
    }
});