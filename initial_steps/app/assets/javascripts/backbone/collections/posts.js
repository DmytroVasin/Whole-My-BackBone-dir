InitialSteps.Collections.Posts = Backbone.Collection.extend({
	url: '/posts',
	model: InitialSteps.Models.Post,

	drawWinner: function(){
		winner = this.shuffle()[0]
		if (winner) {
			winner.win();
		}
	}
})