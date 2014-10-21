Template.signOut.events ({
	'click #signOut': function(e,tmpl) {
		Meteor.logout(function(){
			Session.set('alert', 'Bye Meteorite! Come back whenever you want!');
		});
		return false;
	}
});