;(function() {
  $('#bag').click(function() {
    scroll();
    $('body').toggleClass('withoutScroll');
    $('.bag__bar').slideToggle();
    if (document.documentElement.clientWidth > 767) {
      $('.bag__bar-title').toggle();
      $('.overlay').toggle();
    }
  });

  $('.bar__footer-text').click(function () {
    $('.bag__bar').slideUp();
    if (document.documentElement.clientWidth > 767) {
      $('.bag__bar-title').toggle();
      $('.overlay').toggle();
    }
  });

  $('.menu-act').click(function() {
    scroll();
    $('body').toggleClass('withoutScroll');
    $('.menu__bar').slideToggle();
    if (document.documentElement.clientWidth > 767) {
      $('.menu__bar-title').toggle();
      $('.overlay').toggle();
    }

    if ($('.menu__bar-title').is(":visible")) {
      $('.bag__cart').css({'z-index': '4'})
    } else {
      $('.bag__cart').css({'z-index': '7'})
    }
  });

  function scroll() {
    $('html, body').animate({
        scrollTop: $(".controls").offset().top
    }, 500);
  }
})();
