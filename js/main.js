(function() {

	window.Wings1yte= {
		Models: {},
		Views: {},
		Collections: {},
		Router: {}
	}
	
	window.template = function(id) {
    	return _.template( $(id).html() );
	};

	Wings1yte.Models.Person = Backbone.Model.extend({
	   	defaults: {
	   		FirstName: "",
	   		LastName: "",
	   		Phone: "",
	   		email: ""
	   	},

	   	validate: function (attrs) {
	   		if (!attrs.FirstName) {
	   			console.log( 'Enter First Name' )
	   		}
	   		if (!attrs.LastName) {
	   			return 'Enter Last Name'
	   		}
	   		if (!Phone) {
	   			return 'Enter Phone'
	   		}
	   		if (!email) {
	   			return 'Enter Email'
	   		}
	   	}
   });

	Wings1yte.Views.PersonView = Backbone.View.extend({
		initialize: function () {  
        	this.model.on('destroy', this.remove, this); 
        	this.model.on('change',this.render, this);

		},
		template: template('#taskTemplate'),
		render: function () {
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		},
		events: {
			'click .deleter' : 'DeleteTicket',
			'click .editer' : 'EditTicket'
		},
		EditTicket :function() {
			console.log('ok'+ this.$el)
		},
		DeleteTicket: function() {
			this.model.destroy();
			console.log("ok");
		},
		remove: function(){
			this.$el.toggle('slow');
		}
	});

	Wings1yte.Views.AddPerson = Backbone.View.extend({
		el: '#addpanel',
		events: {'submit' : 'addP' },
		addP: function(e){
			e.preventDefault();
			var newPersonData = {
				'FirstName': $(e.currentTarget).find('input[name="LName"]').val(),
		    	'LastName' : $(e.currentTarget).find('input[name="FName"]').val(),
		    	'Phone': $(e.currentTarget).find('input[name="Phone"]').val(),
		    	'email': $(e.currentTarget).find('input[name="email"]').val(),
			};

			var newPerson = new Wings1yte.Models.Person(newPersonData);
			this.collection.add(newPerson); 
		},
		initialize: function() {

		}
	});

	Wings1yte.Collections.PeopleCollection = Backbone.Collection.extend ({
		model: Wings1yte.Models.Person
	});

	Wings1yte.Views.TicketsView = Backbone.View.extend({
		initialize: function(){
			this.collection.on('add',this.addOne,this)
		},
		render: function () {
			this.collection.each(this.addOne,this);
			return this;
		},
		addOne: function(person) {
			var personView = new Wings1yte.Views.PersonView({model: person});
			this.$el.append(personView.render().el)
		}
	})

	Wings1yte.Router = Backbone.Router.extend({
		routes :{
			'' : 'index',
			'read' : 'read'
		},
		index: function(){
			console.log("Hello wold!")
		},
		read: function() {
			console.log("Read")
		}
	})

   var person  = new Wings1yte.Models.Person();
   var personView = new Wings1yte.Views.PersonView({model : person});
   var peopleCollection = new Wings1yte.Collections.PeopleCollection([
   		{
	    	'FirstName': 'Maxim',
	    	'LastName' : 'Vasilyev',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    },
	    {
	    	'FirstName': 'Ivanov',
	    	'LastName' : 'Ivan',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    },
	    {
	    	'FirstName': 'Petrov',
	    	'LastName' : 'Petr',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@exapmle.com'
	    },
	    {
	    	'FirstName': 'Kozlov',
	    	'LastName' : 'Kozel',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    } 
	]);
var ticketsView = new Wings1yte.Views.TicketsView({collection: peopleCollection});
var addPerson = new Wings1yte.Views.AddPerson({collection: peopleCollection});
$('#tickets').append(ticketsView.render().el);

new Wings1yte.Router();
Backbone.history.start();

})()



