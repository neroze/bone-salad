define(function (require) {
    var User = Backbone.Model.extend({
    defaults: {
        photo: "/img/placeholder.png"
    },
    initialize:function(){
           
          console.log('Loading user Model file');
    },
	});

	return User;
});