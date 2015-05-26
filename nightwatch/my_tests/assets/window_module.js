var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;
var node_url = require('url');

module.exports = {
	'share': function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.clickElement(action.share_button)
			.clickElement("a[data-network='tumblr']")
			.checkSharePrompt(function(result) {
				browser.assert.deepEqual(result, "www.tumblr.com")
			})
			.pause(10000)
			.end();
	}
};