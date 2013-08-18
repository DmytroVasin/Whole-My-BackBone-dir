InitialSteps.Views.Post = Backbone.View.extend({
	template: JST['posts/post'],
	tagName: 'li',

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('highlight', this.highLightWinner, this)
	},

	render: function() {
		this.$el.html(this.template({ post: this.model }));
		return this;
	},

	highLightWinner: function() {
		$('b').removeClass('red');
		this.$('b').addClass('red');
	}
});
