const yeriel = 'yeriel';
$(document).ready(function () {

  'use strict';

  var slide  = $('.slide'),
      slideAelements = $('.slide-a-child'),
      slideBelements = $('.slide-b-child'),
      slideCelements = $('.slide-c-child'),
      slideDelements = $('.slide-d-child'),
      replay = $('button.replay');



  slide.each(function (i) {
      if (i < 3) {
          setTimeout(function () {
              slide.eq(i).fadeOut();
          }, 7000 * (i + 1));
      }
  });


  function animateSlideA() {
    slideAelements.each(function (i) {
        setTimeout(function () {
            slideAelements.eq(i).addClass('slide-a-child-is-visible ');
        }, 300 * (i + 1));
    });
  }

  function animateSlideB() {
    slideBelements.each(function (i) {
        setTimeout(function () {
            slideBelements.eq(i).addClass('slide-b-child-is-visible');
        }, 300 * (i + 1));
    });
  }

  function animateSlideC() {
    slideCelements.each(function (i) {
        setTimeout(function () {
            slideCelements.eq(i).addClass('slide-c-child-is-visible');
        }, 150 * (i + 1));
    });
  }

  function animateSlideD() {
    slideDelements.each(function (i) {
        setTimeout(function () {
            slideDelements.eq(i).addClass('slide-d-child-is-visible');
        }, 300 * (i + 1));
    });
  }

  animateSlideA();

  setTimeout(function () {
    animateSlideB();
  }, 7000);

  setTimeout(function () {
    animateSlideC();
  }, 7000);

  setTimeout(function () {
    animateSlideD();
  }, 7000);


  replay.on('click', function () {
    location.reload(true);
  }); 

});
