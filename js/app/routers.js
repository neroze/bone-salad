define(function (require) {
    var MyRouter = Marionette.AppRouter.extend({});

	var router = new MyRouter();


	var routers  = [
						require('app/home/router'),
						require('app/login/router')
					];
					
	_.each(routers, function(item, key){
			router.processAppRoutes(item.controller, item.routes);
	});
	
	return MyRouter;
});