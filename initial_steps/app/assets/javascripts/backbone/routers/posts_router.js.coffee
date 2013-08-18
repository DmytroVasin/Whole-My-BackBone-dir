class InitialSteps.Routers.Posts extends Backbone.Router
	routes:
		'': 'index'
		'init/:id': 'show'

	index: ->
		console.log '!!!!'
		view = new InitialSteps.Views.PostsIndex()
		$('#container').html(view.render().el)

	show: (id) ->
		alert 'you pass' + id