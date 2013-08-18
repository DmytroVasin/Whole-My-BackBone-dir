InitialSteps.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	tagName: 'p',

	initialize: function(){
		this.collection.on('reset', this.render, this);
		this.collection.on('add', this.appendPost, this);
	},

	events: {
		'submit #new_post': 'createPost',
		'click #draw': 'drawWinner'
	},


	render: function() {
		this.$el.html(this.template());
		this.collection.each(this.appendPost, this);
		return this;
	},

	appendPost: function(post) {
		view = new InitialSteps.Views.Post({ model: post });
		$('#posts').append(view.render().el);
	},

	drawWinner: function(e) {
		e.preventDefault();
		this.collection.drawWinner();
	},

	createPost: function(e) {
		e.preventDefault();
		attribute = { title: $('#new_post_name').val(), in_stock: false }
		this.collection.create( attribute, {
			wait: true,
		  success: function() {
		    $('#new_post')[0].reset();
		  },

		  error: this.handleError
		});
	},

	handleError: function(post, response) {
		hash = $.parseJSON(response.responseText);

		if (response.status == 422) {
			for ( var value in hash ){
				alert(value + " -> " + hash[value]);
			}
		}
	}
});
