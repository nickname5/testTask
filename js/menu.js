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

$('#bag').click(function() {
  checkWidth()
  $('.bag__bar').slideToggle({
    // start: function() {$('.controls').addClass('fix'); console.log($('.controls'));},
    // done: function() {$('.controls').removeClass('fix')}
  });
  $('.popup').toggle();
});

$('.bar__footer-text').click(function () {
  $('.bag__bar').slideUp();
});

$(window).resize(checkWidth);

function checkWidth() {
  if (document.documentElement.clientWidth > 1280) {
    var marginRight = (document.documentElement.clientWidth - 1280) / 2;
    var width = marginRight + menuWidth;
    $('.bag__bar').css({'width': `${width}px`, 'right': `-${marginRight}px`});
  } else {
    console.log('less');
    $('.bag__bar').css({'width': `${menuWidth}px`, 'right': `0px`});
  }
}

/*

open -> popup.css.top

*/
