var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

exports.command = function (callback) {
    var self = this;
    var data = [];
    var tags = [];
    var query = info.tags.getNthTag_button(1);

    this
        .pause(1000)
	    .getText(info.title_text, function(result) {
	    	data.push(result.value);
	    })
		.getText(info.description_text, function(result) {
	    	data.push(result.value);
	    })
        .execute(function() {
            var tempTags = [];
            var n = 1;
            var length = document.querySelector("div[data-hook='tags']").children.length;
            while(n <= length)
                tempTags.push(document.querySelector("div[data-hook='tags'] > a:nth-child(" + (n++) + ")").innerHTML);
            return tempTags;
        }, [], function(result) {
            data.push(result.value);
        })
        .execute(function() {
            var privacy = document.querySelector("span[class='creation-privacy-icon']");
            if(privacy)
                return false;
            else
                return true;
        }, [], function(result) {
            data.push(result.value);
        })
        .getText("span[data-hook='license.title']", function(result) {
            data.push(result.value);
        })

        .pause(1000);
        //.getLog('browser', function() {console.log(data);})

        this.execute(
            function(title, desc, tags, public, license) {
                return [title, desc, tags, public, license];
            },
            data,
            function(result) {
                if (typeof callback === "function")
                    callback.call(self, result.value[0], result.value[1], result.value[2], result.value[3], result.value[4]);
            });

    return this; // allows the command to be chained.
};