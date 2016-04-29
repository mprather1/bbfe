var UsersCollection = Backbone.Collection.extend({
  model: singleUser,
  url: 'http://localhost:3000/users'

});
