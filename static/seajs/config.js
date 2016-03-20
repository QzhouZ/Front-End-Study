var version = "1.0";
seajs.config({
	alias: {
		"jquery": "mod/jquery/jquery.min",
		"form": "mod/jquery/jquery.form",
		"dialog": "mod/dialog/dialog-plus.js",
		"flexslider":"mod/flexslider/flexslider.js",
		"select2": "mod/select2/select2.full.js",
		"cookie": "mod/jquery/jquery.cookie.min.js",
		"webuploader": "mod/webuploader/webuploader.min.js",
		"zuploader": "mod/zuploader/zuploader.min.js"
	},
	paths: {
		"js": "app/js",
        "css": "app/css",
        "jquery": "app/jquery",
        "fancybox": "mod/fancybox",
        "custom": "mod/custom",
        "datetime": "mod/datetimepicker"
	},
	preload: ['jquery'],
	map: [
		[ /^(.*\.(?:css|js))(.*)$/i, '$1?_='+version ]
	]
});


