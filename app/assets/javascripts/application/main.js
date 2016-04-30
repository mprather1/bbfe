 // $(function() {
 //   var userGroupView = new allUsersView();
 // });

// var userGroupView = new allUsersView();
// $('#allUsers').html(userGroupView.render().el);
// $('#allUsers').html(userGroupView.el)
$(function() {
  var userGroupView = new allUsersView();
  $('#allUsers').html(userGroupView.el)

});
