/* $(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.svg"></button>'
      });
  });

$('.single-item').slick(); */

const slider = tns({ /* Слайдер,для нашей карусели */
  container: '.carousel_inner',
  items: 1,
  autoplay: false,
  controls: false,
  nav: true,
  navPosition: "bottom"
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

new WOW().init();

