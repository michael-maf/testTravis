var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;

module.exports = {
	'Like a creation': function(browser) {
		//assumes that you are liking a model with 0 likes.
		var likecount = 0;
		browser
			.url("http://alpha-preview.cashew3d.com/creations")
			.clickElement(sel.creations.article.getNth_article(1))
			.clickElement(action.nice_button)
			.clickElement(action.niceClose_button)
			.loginJohnny()
			.assert.title("Profile")
			.clickElement(sel.profile.article.getNth_article(1))
			.assert.visible(action.nice_button)
			.assert.elementPresent(action.nice_prompt.niceCount_button)
			.getText(action.nice_prompt.niceCount_button, function(result) {
				if(result.value)
					likecount = parseInt(result.value);
			})
			.clickElement(action.nice_button)
			//assuming the user hasn't liked the model
			.getText(action.nice_prompt.niceCount_button, function(result) {
				browser.assert.deepEqual(result.value, 1+likecount);
			})
			.clickElement(action.nice_button)
			.getText(action.nice_prompt.niceCount_button, function(result) {
				browser.assert.equal(result.value, likecount);
			})
			.clickElement(sel.header.username_link)
			.logout()
			.end();
	}
};