var sel = require('./../assets/selector_module.js');

var username = "johnnytests@matterandform.net";
var password = "ReadyPlayerOne";

exports.command = function(callback) {
	var self = this;
	
	this
		.url("http://alpha-preview.cashew3d.com/login")
		.waitForElementVisible('body', 1000)
		.login(username, password)
		.assert.title('Profile')
		.pause(2000);

	if(typeof callback === "function")
		callback.call(self);

	return this;
};