var slides = 6;

$(document).on('ready', function() {
  $(".single-item").slick({
    infinite: true,
    dots: true,
    arrows: false,
    centerMode: true
  });

  $('.responsive').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    // slidesToShow: 5,
    // slidesToScroll: 3,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$('.arrow_left').on('click', function(){
  $('.responsive').slick('slickPrev');
});
$('.arrow_right').on('click', function(){
  $('.responsive').slick('slickNext');
});

// $('.responsive .slick-slide').slick('slickCurrentSlide');



function checkArrows() {
  var curSlidesToShow = $('.responsive').slick('slickGetOption', 'slidesToShow');
  var firstActiveSlide = $('.responsive').slick('slickCurrentSlide');
  if (firstActiveSlide === 0) {
    $('.arrow_left').addClass('arrow_disabled')
  } else {
    $('.arrow_left').removeClass('arrow_disabled')
  }
}
