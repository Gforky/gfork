$(document).ready(function() {
	var fix = $('.nav');
	var fixTop = fix.offset().top,
		fixHeight = fix.height();

	$(window).scroll(function() {
		var docTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		console.log(fixTop);
		console.log(docTop);
		if(fixTop < docTop) {
			fix.css({'position':'fixed'});
			fix.css({top:0});
		} else {
			fix.css({'position':'static'});
		}
	})
});