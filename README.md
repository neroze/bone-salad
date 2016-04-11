# Bone-salad

#File System
<pre>/js
  -app    [your js files]
    -users
      -user.js
      -user-collection.js
      -user-view.js
      -routes.js   [ routes for user module]
    -login
      -login.js
      -login-collection.js
      login-view.js
      routes.js    [ routes for login module]
  -vendor [ vendor lib like jquery, backbone, requireJS etc.]
  -init.js
  -common.js
  -index.html
</pre>
  
  # Simple Rules
  1. All ur files should be in app/[module-name].<br />
  2. Each module should have [module-name].js as model, [module-name]-collection.js as collection file, [module-view].js as view file<br />
     and finally a routes.js for routes requied for ur module.<br />
  3. Requies to register routes in js/app/routes.js file. Just append ur module file in routers variable as follows:<br />
      // This process should be auto ... May be in next version... :D<br />
    <pre>  var routers  = [
						require('app/home/router'),
						require('app/login/router')
					];
	</pre>
	4. Backbone.marionette.js is used as base framework.<br />
	5. Handelbar.js can be used for templating // not required.<br />

#The way I load my files:
	<script src="js/vendor/jquery.js"></script><br />
  	<script src="js/vendor/handlebars.js"></script><br />
  	<script src="js/vendor/underscore.js"></script><br />
  	<script src="js/vendor/backbone.js"></script><br />
  	<script src="js/vendor/backbone.marionette.js"></script><br />
  	<script data-main="init" src="js/vendor/require.js"></script><br />

It's done now.<br /><br /><br />

Cheers.<br />
