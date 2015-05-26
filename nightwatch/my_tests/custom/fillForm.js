var sel = require('./../assets/selector_module');
var form = sel.detailsForm;

//string, string, string[], boolean, int
exports.command = function(title, description, tags, public, license, callback) {
	var self = this;
	var tagRecurse = function(count, target, that) {
		if(parseInt(count) <= parseInt(target)) {
			that.waitForElementVisible(form.tags.getNthTag_field(count), 3000, function() {
				that.clearValue(form.tags.getNthTag_field(count), function() {
					that.setValue(form.tags.getNthTag_field(count), tags[(count-1)], function() {
						if(parseInt(count) === target)
							tagRecurse(count+1, target, that);
						else {
							that.click(form.tags.addTag_button, function() {
								tagRecurse(count+1, target, that);
							});
						}
					});
				});
			});
		}	
	};

	this
		//title
		.waitForElementVisible(form.title_field, 1000, function() {
			this.clearValue(form.title_field, function() {
				this.setValue(form.title_field, title);
			});
		})
		//description
		.waitForElementVisible(form.description_field, 1000, function() {
			this.clearValue(form.description_field, function() {
				this.setValue(form.description_field, description);
			});
		})
		//tags
		.waitForElementVisible(form.tags.getNthTag_field(1), 1000, function() {
			this.execute(function(deleteButton) {
				while (document.querySelector(deleteButton))
					document.querySelector(deleteButton).click();
			}, [form.tags.getNthDelete_button(1)], function() {
				if(tags)
					tagRecurse(1, tags.length, this);
			});
		})
		//privacy
		.waitForElementVisible(form.privacy.public_button, 1000, function() {
			this.waitForElementVisible(form.privacy.private_button, 1000, function() {
				if(public)
					this.click(form.privacy.public_button);
				else
					this.click(form.privacy.private_button);
			});
		})
		//license
		.waitForElementVisible(form.license, 1000, function() {
			this.click(form.license, function() {
				this.click(form.getNthLicense_link(license))
				.keys('\uE007');
			});
		});
	if(typeof callback === "function")
		callback.call(self);

	return this;
};