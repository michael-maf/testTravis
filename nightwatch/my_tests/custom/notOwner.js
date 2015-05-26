var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;


exports.command = function(callback) {
	var self = this;
	var index = 0;
	var fullName = "";
	var userName = "";
	
	
	var rec = function (index) {
		self
		.clickElement(sel.header.explore_link)
		.clickElement(sel.creations.article.getNth_article(index))
		.getText(info.author.authorName_text, function (result) {
			fullName = result.value;
			if (fullName===userName) 
				rec (index + 1);
		})
	};
	
	this.getText(sel.profile.fullname_text, function (result) {
		userName = result.value;
		rec(1); 
	})
	.execute(function() {}, [], function() {
		if (typeof callback === "function")
			callback.call(self, fullName, userName);
	});
	
    return this; // allows the command to be chained.
};