Template.signIn.events ({
	'submit #signInForm': function(e,t){
		e.preventDefault();

		var signInForm = $(e.currentTarget),
			email=trimInput(signInForm.find('.email').val().toLowerCase()),
			password=signInForm.find('.password').val();

		if(isNotEmpty(email)&&isEmail(email)&&isNotEmpty(password)&&isValidPassword(password)){
			Meteor.loginWithPassword(email,password,function(err){
				if(err){
					Session.set('alert','We\'re sorry your credentials are not valid');
				} else {
					Session.set('alert','Welcome back New Meteorite!');
				}
			});
		}
		return false;
	},

	'click #showForgotPassword':function(e,t){
		Session.set('showForgotPassword',true);
		return false;
	},
});