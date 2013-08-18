class InitialSteps.Views.PostsIndex extends Backbone.View

	template: JST['posts/index']

	tagName: 'p'

	render: ->
		$(@el).html(@template(posts: 'this is my post'))
		this