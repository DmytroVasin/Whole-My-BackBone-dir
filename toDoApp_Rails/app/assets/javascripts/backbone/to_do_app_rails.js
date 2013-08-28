//= require_self
//= require_tree ../../templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.ToDoAppRails = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
  init: function() {
  	new ToDoAppRails.Routers.Questions();
  	Backbone.history.start();
  }
};

$(document).ready(function() {
  ToDoAppRails.init();
});