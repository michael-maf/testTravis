var sel = require('./../assets/selector_module.js');
var log_sel = sel.login;

exports.command = function(username, password, callback) {
	var self = this;
	this
		.waitForElementVisible(log_sel.email_field, 1000, function() {
			this.clearValue(log_sel.email_field, function() {
				this.setValue(log_sel.email_field, username);
			});
		})
		.waitForElementVisible(log_sel.password_field, 1000, function() {
			this.clearValue(log_sel.password_field, function() {
				this.setValue(log_sel.password_field, password);
			});
		})
		this.clickElement(log_sel.login_button)
		.waitForElementPresent(log_sel.login_prompt.close_button, 1000, false, function(present) {
			if(present)
				this.click(log_sel.login_prompt.close_button);
		})
		.pause(1000);

	if(typeof callback === "function")
		callback.call(self);

	return this;
};