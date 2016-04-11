

// var base_url = 'http://localhost/laraThasi/public';

//  var Category = Backbone.Model.extend({
//  	//url: base_url+'/category',
//  	urlRoot : base_url+'/category',
// 	 defaults: {
// 	    title: "Not specified",
// 	    category_id:0
// 	  },
//       initialize: function(){
//           console.log("Category Collecton / Repo init");
//       },
//       parse: function(resp) {
//     return resp.data;
//   }
// });


// var Categories = Backbone.Collection.extend({
  
//   model:Categories,
  
// });

//(function ($) {
 
    var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family", photo:"niroze.png" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];
 


var Contact = Backbone.Model.extend({
    defaults: {
        photo: "/img/placeholder.png"
    }
});

var Directory = Backbone.Collection.extend({
    model: Contact,
    defaults:{
    	title:"test"
    }
});

var ContactView = Backbone.View.extend({
	initialize:function(){
		//console.log("loging model");
		// /console.log(this.model);
	},
	tagName: "article",
    className: "contact-container",
   // template: $("#contactTemplate").html(),
 
    render: function () {
        var tmpl = _.template($("#contactTemplate").html());
 
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    },
    events: {
    	"click" : "keyAction",
 	},

 	keyAction:function(e){
 		console.log(this.model.get('name')+"=="+this.model.get('email'));
 		console.log(this.$el.find('h1').html());
 	}
});

var DirectoryView = Backbone.View.extend({
    el: "#contacts",
 
    initialize: function () {
        this.collection = new Directory(contacts);
        this.render();
        //this.$el = $("#contacts");
        console.log("Element length : "+this.$el.length);
    },
 
    render: function () {
    	 console.log("should come after init Element length : "+this.$el.length);
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },
 
    renderContact: function (item) {
        var contactView = new ContactView({
            model: item
        });
        console.log(this.$el.length )
        this.$el.append(contactView.render().el);
    }
});

var Workspace = Backbone.Router.extend({
    initialize:function(){
        console.log("Router init:");
        // Backbone.history.start({pushState: true});
    },
    routes: {
        "":                 "help",    // #help
        "help":                 "help",    // #help 
        "search/:query":        "search",  // #search/kiwis
        "search/:query/p:page": "search"   // #search/kiwis/p7
    },
    help: function() {
        alert("E")
        console.log("opening help page")
    },
    search: function(query, page) {
        console.log("opening search page"+query+page)
    }

});

setTimeout(function(){
	var ab = new DirectoryView
    
    new Workspace();
    Backbone.history.start();
   
},700);





//} (jQuery));
