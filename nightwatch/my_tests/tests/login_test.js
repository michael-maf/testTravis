var sel = require('./../assets/selector_module.js');

module.exports = {
	'Login Test': function(browser) {
		browser
			.loginJohnny()
			.assert.visible(sel.profile.avatar_image)
			.assert.visible(sel.profile.fullname_text)
			.assert.visible(sel.profile.creationsCount_text)
			.assert.visible(sel.profile.creatingSince_text)
			.assert.visible(sel.profile.logout_button)
			.logout()
			.end();
	}
};