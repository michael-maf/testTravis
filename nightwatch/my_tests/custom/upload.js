var sel = require('./../assets/selector_module.js');
var upl = sel.upload.upload_prompt;

exports.command = function(fileIn, formIn, callback) {
	var self = this;
	this
		.waitForElementVisible(upl.dropzone_text, 1000)
		.execute(function() {
			document.querySelector("input[type='file']").setAttribute("style","opacity:1;display:block;visibility:visible;width:1;height:1;");
			return document.querySelector("input[type='file']");
		}, [], function() {
			this
			.waitForElementVisible(upl.dropzone_input, 1000, function() {
				this.setValue(upl.dropzone_input, fileIn);
			});
		})
		.pause(1000)
		.waitForElementVisible(upl.upload_button, 1000, function() {
			this.click(upl.upload_button);
		})
		.waitForElementVisible(sel.upload.details_prompt.save_button, 1000, function() {
			this.fillForm(formIn.title, formIn.description, formIn.tags, formIn.public, formIn.license,  function() {
				this
					.waitForElementNotPresent("button[data-hook='save']:disabled", 60000, function() {
						this.clickElement(sel.upload.details_prompt.save_button);
					});
			});
		});		

	if(typeof callback === "function")
		callback.call(self);

	return this;
};