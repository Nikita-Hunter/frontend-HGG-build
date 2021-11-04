"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 16,
    items: 3,
    nav: true,
    center: true,
    dots: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<div class="owl-prev prevv"><span>previous</span></div>', '<div class="owl-next nextt"><span>next</span></div>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
}); //popup video

$(document).ready(function () {
  $('.venobox').venobox();
}); //visibility header

var header = $('.header'),
    scrollPrev = 0;
$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }

  scrollPrev = scrolled;
});
$(document).ready(function () {
  $('#menuBtn').click(function () {
    $('#navMobile').toggleClass('show');
  });
});
$(document).ready(function () {
  $('#openDropDown').click(function () {
    $('#mobileDropDown').addClass('showDropDown');
  });
});
$(document).ready(function () {
  $('#closeDropDown').click(function () {
    $('#mobileDropDown').removeClass('showDropDown');
  });
});
"use strict";

console.log('maxgraph');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
