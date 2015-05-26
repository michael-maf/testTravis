/*
	Michael Bahng 5/14/2015
	List of css selectors for the Alpha cashew website.
*/

//article generator
var newArticle = function(parent) {
	return {
		getNth_article: function(n) { 
			return parent + " > article:nth-child(" + n + ")"; 
		},
		getNthArticle_text: function(n) {
			return this.getNth_article(n) + " > div.creation-preview-overlay > div > h4 > span";
		}
	};
};

var newTags = function(parent) {
	return {
		addTag_button: parent + " > button:nth-child(1)",
		//the first child is the + button, hence the +1.
		getNthTag_field: function(n) {
			return parent + " > div:nth-child(" + (n + 1) + ") > div > input";
		},
		getNthDelete_button: function(n) {
			return parent + " > div:nth-child(" + (n + 2) + ") > div > button";
		},
		getNthTag_button: function(n) {
			return parent + " > a:nth-child(" + n + ")";
		}
	}
};

//details form template
var detailsForm = {
	title_field: "input[name='title']",
	description_field: "textarea[name='description']",
	tags: newTags("div[data-hook='field-container']"),
	privacy: {
		public_button: "input[type='radio'][value='1']",
		private_button: "input[type='radio'][value='-1']"
	},
	license: "select[name='license']",
	getNthLicense_link: function(n) {
		return this.license + " > option:nth-child(" + n + ")";
	}
};

//header and footer
var header = {
	logo_link: "div[class='logo-graphic']",
	explore_link: "a[href='/creations']",
	upload_link: "a[href='/creations/new']",

	login_link: "a[href='/login']",
	avatar_link: "img[data-hook='user.thumbnail']",
	username_link: "span[data-hook='user.display_name']"
};

var footer = {
	version_text: "#bottom > p:nth-child(1)",
	feedback_link: "a[data-hook='feedback_link']"
};

//pages by url
var creations = {
	creations_header: "div[class='section-heading'] > h2",
	article: newArticle("div[data-hook='creations']"),
	creations_creation: {
		preview: {
			bigger_button: "div.creation-preview.stamp > div.creation-canvas-controls > button:nth-child(1)",
			smaller_button: "div.canvas-holder > div > button:nth-child(1)",
			quality: {
				qualityBigger_button: "div.creation-preview.stamp > div.creation-canvas-controls > button.drop-target",
				qualitySmaller_button: "div.canvas-holder > div > button.drop-target",
				quality_div: "div[class='quality-dropdown']",
				getNth_button: function(n) {
					return this.quality_div + " > button:nth-child(" + n + ")"; 
				}
			}
		},
		action: {
			nice_button: "div[data-hook='action-nice']",
			niceClose_button: "button[data-hook='close-button']",//if not logged in
			comment_button: "div[data-hook='action-comment']",
			share_button: "div[data-hook='action-social']",
			save_button: "div[data-hook='action-save']",
			nice_prompt: {
				niceCount_button: "div[data-hook='action-nice'] > span > span:nth-child(2)",
				getNthLike_link: function(n) {
					return "div[class='user-list'] > article:nth-child(" + n + ") > a";
				},
				getNthLike_text: function(n) {
					return "div[class='user-list'] > article:nth-child(" + n + ") > a > div > div > h3"
				},
				close_button: "a[data-hook='close-button']"
			},
			edit: {
				delete_button: "div[data-hook='action-delete']",
				replace_button: "div[data-hook='action-replace-model']",
				editPreview_button: "div[data-hook='action-edit-preview']",
				deleteConfirm_button: "button[data-hook='close-button']"
			},
			save_prompt: {
				close_button: "a[data-hook='close-button']",
				download_button: "footer > button",
				format: {
					format_dropdown: "select[name='format']",
					getNthFormat_link: function(n) {
						return "select[name='format'] > option:nth-child(" + n + ")";
					}
				}
			},
			share_prompt: {
				embed_link: "h4[data-tab='embed']",
				share_link: "h4[data-tab='share']",
				close_button: "a[data-hook='close_button']",
				embed_text: "textarea",
				tumblr_button: "a[data-network='tumblr']",
				facebook_button: "a[data-network='facebook']",
				twitter_button: "a[data-network='twitter']"
			}
		},
		info: {
			info_div: "div[class='creation-info-details-holder']",
			title_text: "span[data-hook='title']",
			edit: {
				edit_button: "button[data-hook='edit']",
				cancel_button: "button[data-hook='cancel']",
				save_button: "button[data-hook='save']",

				form: detailsForm
			},
			description_text: "p[data-hook='description']",
			tags: newTags("div[data-hook='tags']"),
			geometryCount_text: "span[data-hook='numFaces']",
			date_text: "time[data-hook='date']",
			license_link: "h4[data-hook='license']",
			author: {
				author_link: "a[data-hook='user.href']",
				authorName_text: "span[data-hook='user.full_name']",
				follow_button: "button[data-hook='follow-user']"
			}
		}
	}
};

var login = {
	login_header: "div[class='section-heading'] > h2",
	email_field: "input[name='email']",
	password_field: "input[name='password']",
	login_button: "button[data-hook='submit']",
	login_prompt: {
		close_button: "button[data-hook='close-button']"
	}
};

var profile = {
	avatar_image: "img[data-hook='avatar']",
	fullname_text: "div[class='user-info-name-holder'] > h2 > span[data-hook='full_name']",
	creationsCount_text: "h3[data-hook='creations_count']",
	creatingSince_text: "time[data-hook='date_created']",
	// proudest creation? about?
	logout_button: "a[href='/logout']",
	article: newArticle("div[data-hook='creations']")
};

var upload = {
	upload_prompt: {
		upload_header: "header[class='info-row'] > h3",
		close_button: "a[data-hook='close-button']",
		dropzone_input: "input[type='file'][name='files']",
		dropzone_text: "span[data-hook='label']",
		upload_button: "div[class='drop'] > button",
		article: newArticle("div[data-hook='files']"),
		getNthRemove_button: function(n) {
			return this.article.nth_article(n) + " > button[data-hook='remove']";
		},
		getNthFilename_button: function(n) {
			return this.article.nth_article(n) + " > span[data=hook=name]";
		}
	},
	details_prompt: {
		form: detailsForm,
		close_button: "a[data-hook='close-button']",
		save_button: "button[data-hook='save']",
		waiting_text: "section[class='creation-edit'] > header > h3"
	}
};

module.exports = {
	header: header,
	footer: footer,
	detailsForm: detailsForm,
	creations: creations,
	login: login,
	profile: profile,
	upload: upload
};

