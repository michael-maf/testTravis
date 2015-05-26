var sel = require ('./../assets/selector_module.js');

exports.command = function (qualIndex, callback) {
    var self = this;
    var regScreenButton = sel.creations.creations_creation.preview.quality.qualityBigger_button;
    var fullScreenButton = sel.creations.creations_creation.preview.quality.qualitySmaller_button;
    this
    	//result: if visible, result.value is true
    	.pause(1000)
    	.isVisible(regScreenButton, function(result) {
    		if(result.value) {
    			this.waitForElementVisible(regScreenButton, 3000, function() {
					this.click(regScreenButton);
				});
    		}
			else {
				this.waitForElementVisible(fullScreenButton, 3000, function() {
					this.click(fullScreenButton);
				});
			}
    	})
    	.waitForElementVisible(sel.creations.creations_creation.preview.quality.quality_div, 1000, function() {
    		this.click(sel.creations.creations_creation.preview.quality.getNth_button(qualIndex));
    	})
		.pause(1000);

    if(typeof callback === "function")
        callback.call(self);
    
    return this; // allows the command to be chained.
};