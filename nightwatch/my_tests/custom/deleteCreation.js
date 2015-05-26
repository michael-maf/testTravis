var sel = require('./../assets/selector_module.js');

var info = sel.creations.creations_creation.info;
var editAction = sel.creations.creations_creation.action.edit;

exports.command = function(callback) {
	var self = this;

	this
		.waitForElementVisible(info.edit.edit_button, 1000, function() {
			this.click(info.edit.edit_button);
		})
		.waitForElementVisible(editAction.delete_button, 1000, function() {
			this.click(editAction.delete_button, function() {
				this.acceptAlert();
			});
		})
		.waitForElementVisible(editAction.deleteConfirm_button, 1000, function() {
			this.click(editAction.deleteConfirm_button);
		})
		.pause(1000);


	if(typeof callback === "function")
		callback.call(self);

	return this;
};