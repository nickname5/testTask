// const menu = document.getElementById('nav');
//
// menu.addEventListener('click', handleClick);
//
// function handleClick() {
//   if (menu.classList[0] == 'open') {
//     menu.classList.remove('open');
//   } else {
//     menu.classList.add('open');
//   }
// }
var menuWidth = 440;
var menuWidthTablet = 278;

$('#bag').click(function() {
  checkWidth()
  $('.bag__bar').slideToggle({
    // start: function() {$('.controls').addClass('fix'); console.log($('.controls'));},
    // done: function() {$('.bar-title').toggle();}
  });
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
  checkWidth()
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

/*

open -> popup.css.top

*/

// else {
//   console.log('less');
//   $('.bag__bar').css({'width': `${menuWidth}px`/*, 'right': `0px`*/});
// }
