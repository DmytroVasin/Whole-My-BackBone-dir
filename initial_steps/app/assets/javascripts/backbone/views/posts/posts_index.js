InitialSteps.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	tagName: 'p',

	initialize: function(){
		collection.on('reset', this.render, this);
	},

	events: {
		'submit #new_post': 'createPost'
	},


	render: function() {
    this.$el.html(this.template({
      posts: collection
    }));
    return this;
  },

	createPost: function(e) {
	  e.preventDefault();
	  console.log(collection);

	  collection.create({ title: $('#new_post_name').val() });
	}
});

