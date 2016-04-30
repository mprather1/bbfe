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
  // className: 'usersList',
  //
  // render: function() {
  //   for (var i = 0; i < this.collection.length; i++) {
  //     this.renderItem(this.collection.models[i]);
  //   };
  //   $(this.container).find(this.className).remove();
  //   this.$el.appendTo(this.options.container);
  //   return this;
  // },
  //
  // renderItem: function(model) {
  //   var item = new singleUserView({
  //     "model": model
  //   });
  //   item.render().$el.appendTo(this.$el);
  // }

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

$(function() {
  var userGroupView = new allUsersView();
  $('#allUsers').html(userGroupView.el)

});
