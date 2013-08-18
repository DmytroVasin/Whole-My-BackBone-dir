InitialSteps.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	tagName: 'p',
	initialize: function(){
		collection.on('reset', this.render, this);
	},
	render: function() {
    this.$el.html(this.template({
      posts: collection
    }));
    return this;
  }
});

