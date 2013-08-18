InitialSteps.Routers.Posts = Backbone.Router.extend({
	routes: {
		''     : 'index',
		'init/:id': 'show'
	},
	initialize: function(){
		this.collection = new InitialSteps.Collections.Posts();
		this.collection.fetch();
	},
	index: function() {
 		view = new InitialSteps.Views.PostsIndex({ collection: this.collection });
 		$('#container').html(view.render().el);
	}
});