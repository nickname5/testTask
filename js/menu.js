;(function() {
  $('#bag').click(function() {
    if ($('.menu__bar').is(":visible")) {
      return
    }
    scroll();
    $('body').toggleClass('withoutScroll');
    $('.bag__bar').slideToggle();
    if ($('.products__carousel-arrow').is(":visible")) {
      $('.bag__bar-title').toggle();
      $('.overlay').toggle();
    }
  });

  $('.bar__footer-text').click(function () {
    $('.bag__bar').slideUp();
    if ($('.products__carousel-arrow').is(":visible")) {
      $('.bag__bar-title').toggle();
      $('.overlay').toggle();
    }
  });

  $('.menu-act').click(function() {
    if ($('.bag__bar').is(":visible")) {
      return
    }
    scroll();
    $('body').toggleClass('withoutScroll');
    $('.menu__bar').slideToggle();
    if ($('.products__carousel-arrow').is(":visible")) {
      $('.menu__bar-title').toggle();
      $('.overlay').toggle();
    }
    fixZ();
  });

  $(window).resize(function() {
    if ($('.bag__bar').is(":visible")) {
      $('.bag__bar').toggle();
      if ($('.products__carousel-arrow').is(":visible")) {
        $('.bag__bar-title').toggle();
        $('.overlay').toggle();
      }
    }

    if ($('.menu__bar').is(":visible")) {
      $('.menu__bar').toggle();
      if ($('.products__carousel-arrow').is(":visible")) {
        $('.menu__bar-title').toggle();
        $('.overlay').toggle();
      }
      fixZ();
    }

    if ($('body').hasClass('withoutScroll')) {
      $('body').toggleClass('withoutScroll');
    }
  });

  function scroll() {
    $('html, body').animate({
        scrollTop: $(".controls").offset().top
    }, 500);
  }

  function fixZ() {
    if ($('.menu__bar-title').is(":visible")) {
      $('.bag__cart').css({'z-index': '4'})
    } else {
      $('.bag__cart').css({'z-index': '7'})
    }
  }
})();
