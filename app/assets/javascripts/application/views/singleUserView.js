singleUserView = Backbone.View.extend({

  tagName: 'li',
  className: 'userElement',

  template: _.template("<%= name %>"),

  render: function() {
    var userTemplate = this.template( this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addColor',
  	'mouseout': 'removeColor'
  },

  addColor: function() {
    this.$el.css('color', 'green');
  },

  removeColor: function() {
    this.$el.css('color', 'black');
  }

});
