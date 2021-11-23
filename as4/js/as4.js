// b&w to color
var images = document.getElementsByClassName('cover');
var changeFrom = 0; 

window.addEventListener('scroll', function() {
  if (window.scrollY >= changeFrom ) {
    [].forEach.call(images, function(image) {
      image.classList.add('-cover-bnw');
    });
  }
  else {
    [].forEach.call(images, function(image) {
      image.classList.remove('cover-bnw');
    });
  }
});

// highlight
$(function () {
	var winh = $(window).height();
	$(window).scroll(function () {
		var current_pos = $(document).scrollTop();
		$(".spot").each(function () {
			if (current_pos > $(this).offset().top - winh / 2) {
				$(this).addClass("spotted");
			}
		});
	});
});




