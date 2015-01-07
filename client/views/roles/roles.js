Template.roles.helpers({
  userList:function(){
    return Meteor.users.find();
  }
});
Template.roles.events({

});


Template.role.events({
  'change #viewcustomers':function(evt,tmpl){
    if(evt.target.checked){
      Meteor.call('addToRole',this._id,'view-customers','');
    }
    console.log(evt.target.checked);
  },
  'change #editcustomers':function(evt,tmpl){
    if(evt.target.checked){
      Meteor.call('addToRole',this._id,'edit-customers','');
    }
  },
  'change #viewprojects':function(evt,tmpl){
    Meteor.call('addToRole',this._id,'view-projects','');
  },
  'change #editprojects':function(evt,tmpl){
    Meteor.call('addToRole',this._id,'edit-projects','');
  }
})
