singleUserView = Backbone.View.extend({

  tagName: 'li',

  template: _.template("<%= name %>"),

  render: function() {
    var userTemplate = this.template( this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  }

});
