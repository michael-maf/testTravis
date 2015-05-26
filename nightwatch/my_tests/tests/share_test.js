var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;
var node_url = require('url');

module.exports = {
	'Share': function(browser) {
		var tumblr = "";
		var facebook = "";
		var twitter = "";
		var currentModel = "";

		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.getText(sel.creations.creations_creation.info.title_text, function(result) {
				currentModel = result.value;
			})
			.clickElement(action.share_button)
			//tumblr
			.clickElement(action.share_prompt.tumblr_button)
			.checkSharePrompt(function(result) {
				browser.assert.deepEqual(result, "www.tumblr.com")
			})
			.getText(sel.creations.creations_creation.info.title_text, function(result) {
				browser.assert.deepEqual(result.value, currentModel);
			})
			.clickElement(action.share_button)
			//facebook
			.clickElement(action.share_prompt.facebook_button)
			.checkSharePrompt(function(result) {
				browser.assert.deepEqual(result, "www.facebook.com")
			})
			.getText(sel.creations.creations_creation.info.title_text, function(result) {
				browser.assert.deepEqual(result.value, currentModel);
			})
			.clickElement(action.share_button)
			//twitter
			.clickElement(action.share_prompt.twitter_button)
			.checkSharePrompt(function(result) {
				browser.assert.deepEqual(result, "twitter.com")
			})
			.getText(sel.creations.creations_creation.info.title_text, function(result) {
				browser.assert.deepEqual(result.value, currentModel);
			})
			.logout()
			.end();
	}
};