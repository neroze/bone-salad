define(function (require) {
	var homeCtr = require('app/home/home');
    return {
    	controller:homeCtr,
    	routes:{
    		'home':"sayHome"
    	}
    }
});