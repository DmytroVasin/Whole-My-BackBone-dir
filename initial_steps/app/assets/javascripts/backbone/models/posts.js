InitialSteps.Models.Post = Backbone.Model.extend({
	win: function(){
		this.set({in_stock: true});
		this.save();
		this.trigger('highlight');
	}
})