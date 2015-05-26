var sel = require('./../assets/selector_module.js');
var qbuttonBigger = sel.creations.creations_creation.preview.quality.qualityBigger_button;
var qbuttonSmaller = sel.creations.creations_creation.preview.quality.qualitySmaller_button;

module.exports = {
	'Quality change : low to medium to high; Toggle size; Quality change : high to medium to low' : function (browser) {
		var curResult = 0;
		var facesIncreased = false;
		browser
			.loginJohnny()
			.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.creations.article.getNth_article(1));
			})
			.waitForElementVisible(qbuttonBigger, 1000, function() {
				browser
				.pause(3000)
				.qualityChange(1)
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					curResult = result.value;
				})
				.qualityChange(2)
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					browser.assert.equal(Boolean(parseInt(result.value) > parseInt(curResult)), true);
					curResult = result.value;
				})
				.qualityChange(3)
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					browser.assert.equal(Boolean(parseInt(result.value) > parseInt(curResult)), true);
					curResult = result.value;
				})
				.assert.visible(sel.creations.creations_creation.action.nice_button)
				.assert.visible(sel.creations.creations_creation.action.comment_button)
				.assert.visible(sel.creations.creations_creation.action.share_button)
				.assert.visible(sel.creations.creations_creation.action.save_button)
				.assert.visible(sel.creations.creations_creation.info.geometryCount_text)
				.assert.visible(sel.creations.creations_creation.info.license_link)
				.assert.visible(sel.creations.creations_creation.info.author.author_link)
				.assert.visible(sel.creations.creations_creation.info.author.authorName_text)
			})
			.waitForElementVisible(sel.creations.creations_creation.preview.bigger_button, 1000, function() {
				browser.click(sel.creations.creations_creation.preview.bigger_button);
			})
			.waitForElementVisible(qbuttonSmaller, 1000, function() {
				browser
				.pause(3000)
				.qualityChange(2)
				.qualityChange(1)
			})
			.clickElement(sel.creations.creations_creation.preview.smaller_button)
			.logout()
			.end();
  }
}