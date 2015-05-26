var sel = require('./../assets/selector_module');
var log_sel = sel.login;

module.exports = {
	'Form': function(browser) {
		browser
			.loginJohnny()
			.pause(1000)
			.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.profile.article.getNth_article(1));
			})
			.waitForElementVisible(sel.creations.creations_creation.info.edit.edit_button, 1000, function() {
				browser.click(sel.creations.creations_creation.info.edit.edit_button);
			})
			.waitForElementVisible(sel.creations.creations_creation.info.edit.save_button, 1000, function() {
				browser.fillForm("Potato", "Tomato", ["wasd", "potato", "ham"], false, 2);
			})
			.pause(1000)
			.end();
	}
};