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
    new InitialSteps.Routers.Posts();
    Backbone.history.start();
  }
};

$(document).ready(function() {
  InitialSteps.init();
});
	