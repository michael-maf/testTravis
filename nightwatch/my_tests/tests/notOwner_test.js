var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

module.exports = {
	'Navigate to a model with a different owner' : function(browser) {
		browser
		.loginJohnny()
		.notOwner(function(full, user) {
			console.log(full, user);
			browser.assert.notDeepEqual(full, user);
		})
		.pause(5000)
		.logout()
		.end();
	}
};