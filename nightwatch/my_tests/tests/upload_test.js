 var sel = require('./../assets/selector_module.js');
 var path = require("path");
 //var userDir = "C:/Users/Muhammad/Desktop" 
 /* Specify the location of your nightwatch-testing folder until we learn how to use relative file path
    E.g., C:/Users/Michael/...
 */
 var filepath = path.join(__dirname, "..", "assets", "drewsdog.obj");
 console.log(filepath);

 var licenseArr = ["All Rights Reserved", "Creative Commons Attribution", "Creative Commons Attribution-ShareAlike",
				"Creative Commons Attribution-NoDerivatives",
				"Creative Commons Attribution-NonCommercial", "Creative Commons Attribution-NonCommercial-ShareAlike",
				"Creative Commons Attribution-NonCommercial-NoDerivatives", "No Rights Reserved", "No Known Copyright"];
 
var formObj = {
	title: "Drew's Cute Dog",
	description: "MOO!!!!! :3",
	tags: ["tuna","cat food","birds","fabulous"],
	public: false,
	license: 3
};

var details = [formObj.title, formObj.description, formObj.tags, formObj.public, formObj.license];

module.exports = {
	'Upload a creation then delete it': function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.header.upload_link)
			.upload(filepath, formObj, function() {
				browser
					.waitForElementPresent(sel.upload.details_prompt.close_button, 1000, false, function(present) {
						// if(present)
							// browser.clickElement(sel.upload.details_prompt.close_button)
					})
			})
			.waitForElementPresent(sel.creations.creations_creation.info.edit.edit_button, 60000)
			//.refresh()
			//.clickElement(sel.profile.article.getNth_article(1))
			.getInfo(function(title, desc, tags, public, license) {
				console.log(title, desc, tags, public, license);
				for(var i = 0; i < arguments.length - 1; i++)
					browser.assert.deepEqual(arguments[i], details[i]);
				browser.assert.deepEqual(license, licenseArr[formObj.license - 1]);
			})
			.assert.title(formObj.title)
			.deleteCreation(function() {
				browser.pause(1000);
		    })
			.assert.title('Creations')
			.logout()
			.end();
	}
};