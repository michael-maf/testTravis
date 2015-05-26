var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

var details = ["Potato", "Tomato", ["wasd", "potato", "ham"], false, 2];

module.exports = {
	'Edit Model' : function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.clickElement(info.edit.edit_button)
			.assert.visible(info.edit.save_button)
			.assert.visible(info.edit.cancel_button)
			.assert.visible(info.edit.form.title_field)
			.assert.visible(info.edit.form.description_field)
			.assert.visible(info.edit.form.tags.addTag_button)
			.assert.visible(info.edit.form.privacy.public_button)
			.assert.visible(info.edit.form.privacy.private_button)
			.assert.visible(info.edit.form.license)
			.fillForm(details[0], details[1], details[2], details[3], details[4])
			.clickElement(info.edit.save_button)
			.assert.visible(info.edit.edit_button)
			.getInfo(function(title, desc, tags, public, license) {
				console.log(title, desc, tags, public, license);
				for(var i = 0; i < arguments.length - 1; i++)
					browser.assert.deepEqual(arguments[i], details[i]);
				browser.assert.deepEqual(arguments[arguments.length - 1], "Creative Commons Attribution");
			})
			.pause(1000)
			.logout()
			.end();
	}
};