var sel = require('./../assets/selector_module.js');

module.exports = {
	'Click': function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.header.upload_link)
			.pause(1000)
			.end();
	}
};