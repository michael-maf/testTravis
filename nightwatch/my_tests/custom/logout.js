var sel = require('./../assets/selector_module.js');

exports.command = function(username, password, callback) {
	var self = this;
	this
		.clickElement(sel.header.username_link)
		.pause(1000)
		.clickElement(sel.profile.logout_button)
		.pause(1000);

	if(typeof callback === "function")
		callback.call(self);

	return this;
};