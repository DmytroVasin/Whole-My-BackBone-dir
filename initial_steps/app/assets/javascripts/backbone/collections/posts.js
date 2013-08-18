InitialSteps.Collections.Posts = Backbone.Collection.extend({
	url: '/posts',

	drawWinner: function(){
		winner = this.shuffle()[0]
		if (winner) {
			winner.set({in_stock: true})
			winner.save()
		}
	}
})