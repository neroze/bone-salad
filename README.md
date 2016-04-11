# bone-salad

#File System
/js
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
  
  # Simple Rules
  1. All ur files should be in app/[module-name].
  2. Each module should have [module-name].js as model, [module-name]-collection.js as collection file, [module-view].js as view file
     and finally a routes.js for routes requied for ur module.
  3. Requies to register routes in js/app/routes.js file. Just append ur module file in routers variable as follows:
      // This process should be auto ... May be in next version... :D
      var routers  = [
						require('app/home/router'),
						require('app/login/router')
					];
	4. Backbone.marionette.js is used as base framework.
	5. Handelbar.js can be used for templating // not required.

#The way I load my files:
	<script src="js/vendor/jquery.js"></script>
  <script src="js/vendor/handlebars.js"></script>
  <script src="js/vendor/underscore.js"></script>
  <script src="js/vendor/backbone.js"></script>
  <script src="js/vendor/backbone.marionette.js"></script>
  <script data-main="init" src="js/vendor/require.js"></script>

It's done now.

Cheers.
