var menuWidth = 440;
var menuWidthTablet = 278;

$('#bag').click(function() {
  checkWidth();
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
  checkWidth();
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

$(window).resize(checkWidth);

function checkWidth() {
  if (document.documentElement.clientWidth < 768) {
    $('.bar').css({'width': `${document.documentElement.clientWidth}px`});
  }
  if (document.documentElement.clientWidth < 1280
    && document.documentElement.clientWidth >= 768) {
    $('.bar').css({'width': `${menuWidthTablet}px`});
    $('.bar-title').css({'width': `${menuWidthTablet}px`});
  }
  if (document.documentElement.clientWidth > 1280) {
    var marginRight = (document.documentElement.clientWidth - 1280) / 2;
    var width = marginRight + menuWidth;
    $('.bar').css({'width': `${width}px`/*, 'right': `-${marginRight}px`*/});
    $('.bar-title').css({'width': `${width}px`});
  }
}

function scroll() {
  $('html, body').animate({
      scrollTop: $(".controls").offset().top
  }, 1000);
}
