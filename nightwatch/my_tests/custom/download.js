var sel = require ('./../assets/selector_module.js');

exports.command = function (callback) {
    var self = this;
    this
		.clickElement(sel.creations.creations_creation.action.save_button)
		.clickElement(sel.creations.creations_creation.action.save_prompt.download_button)
		.clickElement(sel.creations.creations_creation.action.save_prompt.close_button)
		.pause(1000)
		.acceptAlert();
    if (typeof callback === "function")
        callback.call(self);
    return this; // allows the command to be chained.
};