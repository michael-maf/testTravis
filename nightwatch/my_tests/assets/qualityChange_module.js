var sel = require('./../assets/selector_module.js');
var qbutton = sel.creations.creations_creation.preview.quality.qualitySmaller_button;

module.exports = {
	'Quality Change' : function (browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.creations.article.getNth_article(1));
			})
			.waitForElementVisible(sel.creations.creations_creation.preview.bigger_button, 1000, function() {
				browser.click(sel.creations.creations_creation.preview.bigger_button);
			})
			.waitForElementVisible(qbutton, 1000, function() {
				browser.qualityChange(1, function() {
					browser.pause(10000);
				});
			})
			.end();
  }
}