define(function (require) {
    var Directory = require('app/users/userCtr');

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
        defaults:{
            data:[]
        },
        initialize: function (data) {
            
            //this.$el = $("#contacts");
            console.log("Element length : "+this.$el.length);
        },
        doit:function(data){
            this.collection = new Directory(data);
            this.render();
        },
        render: function () {
            console.log("should come after init Element length : "+this.$el.length);
            var that = this;
            var fragment = document.createDocumentFragment();
            _.each(this.collection.models, function (item) {
                //that.renderContact(item);
                fragment.appendChild( that.renderContact(item) );
            }, this);

             this.$el.append(fragment);
        },
     
        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            console.log(this.$el.length )
            //this.$el.append(contactView.render().el);
            return contactView.render().el
        }
    });

    return DirectoryView;
});