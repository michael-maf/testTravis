var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

module.exports = {
	'Get Info' : function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.header.explore_link)
			.clickElement(sel.profile.article.getNth_article(1))
			.getInfo(function(title, desc, tags, public, license) {
				console.log(title);
				console.log(desc);
				console.log(tags);
				console.log(public);
				console.log(license);
			})
			.pause(10000)
			.end();
	}
};