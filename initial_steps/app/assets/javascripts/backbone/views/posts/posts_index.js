InitialSteps.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	tagName: 'p',

	initialize: function(){
		collection.on('reset', this.render, this);
		collection.on('add', this.appendPost, this);
	},

	events: {
		'submit #new_post': 'createPost'
	},



	render: function() {
		this.$el.html(this.template());
		collection.each(this.appendPost, this);
		return this;
	},

	appendPost: function(post) {
		view = new InitialSteps.Views.Post(model = post);
		$('#posts').append(view.render().el);
	},

	createPost: function(e) {
		e.preventDefault();
		collection.create({ title: $('#new_post_name').val() });
	  $('#new_post')[0].reset();
	}
});

