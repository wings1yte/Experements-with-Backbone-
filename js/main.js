   var Person = Backbone.Model.extend({
   	defaults: {
   		FirstName: "",
   		LastName: "",
   		Phone: "",
   		email: ""
   	},

   	validate: function (attrs) {
   		if (!attrs.FirstName) {
   			return 'Enter First Name'
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

var PersonView = Backbone.View.extend({
	template: _.template( $('#taskTemplate').html() ),

	render: function () {
		this.$el.html( this.template(this.model.toJSON()));
		return this;
	}
});

var PeopleCollection = Backbone.Collection.extend ({
	model: Person
});

var TicketsView = Backbone.View.extend({
	render: function () {
		this.collection.each(function(person) {
			var personView = new PersonView({model: person});
			this.$el.append(personView.render().el)
		},this);
		return this;
	}
})


   var person  = new Person();
   var personView = new PersonView({model : person});
   var peopleCollection = new PeopleCollection([
   		{
	    	'FirstName': 'Maxim',
	    	'LastName' : 'Vasilyev',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    },
	    {
	    	'FirstName': 'Maxim',
	    	'LastName' : 'Vasilyev',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    },
	    {
	    	'FirstName': 'Maxim',
	    	'LastName' : 'Vasilyev',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    },
	    {
	    	'FirstName': 'Maxim',
	    	'LastName' : 'Vasilyev',
	    	'Phone': '+79158800000',
	    	'email': 'exapmle@examplr.com'
	    } 
	]);
var ticketsView = new TicketsView({collection: peopleCollection});

$('#tickets').append(ticketsView.render().el);