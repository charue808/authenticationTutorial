Template.resetPasswordTemplate.events({
	'submit #resetPasswordForm': function(e,tmpl){
		e.preventDefault();

		var resetPasswordForm = $(e.currentTarget),
			password = resetPasswordForm.find('#resetPasswordPassword').val(),
			passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();

		if(isNotEmpty(password)&&areValidPasswords(password,passwordConfirm)){
			Accounts.resetPassword(Session.get('resetPassword'),password,function(err){
				if(err) {
					Session.set('alert',{type:'error',message:'We\'re sorry but something went wrong.'});
				}
				else {
					Session.set('alert','Your password has been changed. Welcome back!');
					Session.set('resetPassword',null);
				}
			});
		}
		return false;
	}
});