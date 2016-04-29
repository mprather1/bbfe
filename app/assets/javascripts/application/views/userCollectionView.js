allUsersView = Backbone.View.extend({
  tagName: 'ul',
  className: 'usersList',

  render: function() {
    for (var i = 0; i < this.collection.length; i++) {
      this.renderItem(this.collection.models[i]);
    };
    $(this.container).find(this.className).remove();
    this.$el.appendTo(this.options.container);
    return this;
  },

  renderItem: function(model) {
    var item = new singleUserView({
      "model": model
    });
    item.render().$el.appendTo(this.$el);
  }

  // render: function() {
  //   this.collection.each(this.addUser, this);
  //   return this;
  // },
  //
  // addUser: function(user) {
  //   var userView = singleUserView ({ model: user });
  //   this.$el.append(userView.render().el);
  // }

});
