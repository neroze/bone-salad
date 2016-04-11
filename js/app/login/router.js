define(function (require) {
	var loginCtr = require('app/login/login');
    return {
    	controller:loginCtr,
    	routes:{
    		'login':"sayLogin"
    	}
    }
});