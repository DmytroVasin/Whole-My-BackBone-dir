#= require_self
#= require_tree ../../templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.InitialSteps = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
  init: function() {
  	console.log('----');
    new InitialSteps.Routers.Posts();
  	console.log('--!!!--');
    Backbone.history.start();
  	console.log('--+++--');
  }
};

$(document).ready(function() {
	console.log('asdasd');
  InitialSteps.init();
});
	