allUsersView = Backbone.View.extend({

  tagName: 'ul',

  initialize: function( initialUsers ) {
    this.collection = new userCollection();
    this.collection.fetch({reset: true});
    this.render();

    this.listenTo(this.collection, 'add', this.renderUser);
    this.listenTo(this.collection, 'reset', this.render)
  },

  render: function() {
    this.collection.each(function(item) {
      this.renderUser(item);
    }, this);
    return this;
  },

  renderUser: function( item ) {
    var user = new singleUserView({
      model: item
    });
    this.$el.append(user.render().el);
  }

});
