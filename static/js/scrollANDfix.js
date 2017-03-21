$(document).ready(function() {
	var fix = $('.nav');
	var fixTop = fix.offset().top,
		fixHeight = fix.height();

	$(window).scroll(function() {
		var docTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		if(fixTop < docTop) {
			fix.css({'position':'fixed'});
			fix.css({top:0});
			$('.main-content').css({'margin': '110px auto'});
		} else {
			fix.css({'position':'static'});
			$('.main-content').css({'margin': '50px auto'});
		}
	})
});