class InitialSteps.Views.Post extends Backbone.View
	template: JST['posts/post']
	tagName: 'li'

	render: ->
		json = {title: model.get('title'), name: 'somename'}
		$(@el).html(@template(json))
		this