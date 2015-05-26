var sel = require ('./../assets/selector_module.js');

exports.command = function (css, callback) {
    var self = this;

    this.waitForElementVisible(css, 1000, function() {
    	this
    		.pause(1000)
    		.click(css, function() { this.pause(500) });
    });

    if (typeof callback === "function")
        callback.call(self);
    return this; // allows the command to be chained.
};