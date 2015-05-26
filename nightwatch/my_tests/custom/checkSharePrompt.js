var sel = require('./../assets/selector_module');
var form = sel.detailsForm;
var node_url = require('url');

exports.command = function(callback) {
	var self = this;
	var foundUrl = "";

	this
		.window_handles(function(result) {
			this
				.switchWindow(result.value[1])
				.url(function(url) {
					foundUrl = node_url.parse(url.value).hostname;
				})
				.closeWindow()
				.switchWindow(result.value[0]);
		})
	.pause(1000)
	.execute(function() {
		return;
	}, [], function() {
		if(typeof callback === "function")
			callback.call(self, foundUrl);
	})

	return this;
};