Template.forgotPassword.events({
	'submit #forgotPasswordForm': function(e,tmpl){
		e.preventDefault();

		var forgotPasswordForm = $(e.currentTarget),
			email = trimInput(forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase());

		if(isNotEmpty(email)&&isEmail(email)) {
			Accounts.forgotPassword({email:email},function(err){
				if(err){
					if(err.message === 'User not found[403]'){
						Session.set('alert','This email does not exist.');
					} else {
						Session.set('alert','we\'re sorry but something went wrong.');
					}
				} else {
					Session.set('alert','Email Sent. Please check your mailbox to reset your password.');
				}

			});
		}
		return false;
	},

	'click #returnToSignIn': function(e,tmpl){
		Session.set('showForgotPassword', null);
		return false;
	},
});