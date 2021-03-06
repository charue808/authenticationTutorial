trimInput = function(value) {
  return value.replace(/^\s*|\s$/g,"");
};

isNotEmpty = function(value) {
  if(value&&value!=="") {
    return true;
  }
  Session.set('alert', 'Please fill in all required fields.');
  return false;
};

isEmail = function(value) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(filter.test(value)){
    return true;
  }
  Session.set('alert','Please enter a valid email address.');
  return false;
};

isValidPassword = function(password) {
  if(password.length < 6){
    Session.set('alert','Your password should be 6 characters long.');
    return false;
  }
  return true;
};

areValidPasswords = function(password, confirm) {
  if(!isValidPassword(password)){
    return false;
  }
  if(password!==confirm){
    Session.set('alert','Your two passwords are not equivalent');
    return false;
  }
  return true;
};

if(Accounts._resetPasswordToken){
  Session.set('resetPassword',Accounts._resetPasswordToken);
}

Template.main.helpers({
  showForgotPassword: function() {
    return Session.get('showForgotPassword');
  },
  resetPassword: function() {
    return Session.get('resetPassword')
  }
});

