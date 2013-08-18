InitialSteps.Views.Post = Backbone.View.extend({
	template: JST['posts/post'],
	tagName: 'li',

	initialize: function(){
		this.model.on('change', this.render, this);
	},

	render: function() {
		this.$el.html(this.template({ post: this.model }));
		return this;
	}
});
