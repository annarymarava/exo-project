
let burgerIcon = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let headerListSubstrate = document.querySelector('.header-list-substrate');


burgerIcon.addEventListener('click', function() {
    let htmlWidth = document.documentElement.clientWidth;
    let bodyPadding = window.innerWidth - htmlWidth;
    burgerMenu.classList.remove('close');
    headerListSubstrate.classList.remove('close');
    body.style.paddingRight = bodyPadding + 'px';
    body.classList.add('hidden-scroll');
    burgerMenu.classList.add('active');
    headerListSubstrate.classList.add('active');
});

headerListSubstrate.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
  headerListSubstrate.classList.remove('active');
  body.classList.remove('hidden-scroll');
  body.style.paddingRight = 0;
  burgerMenu.classList.add('close');
  headerListSubstrate.classList.add('close');
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 750) {
      $('.header-body').addClass('fixed');
  } else {
      $('.header-body').removeClass('fixed');
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 750) {
      $('.header-list-substrate').addClass('fixed');
  } else {
      $('.header-list-substrate').removeClass('fixed');
  }
});

var swiper = new Swiper('.swiper-container-team', {
    slidesPerView: 4,
    spaceBetween: 29,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.swiper-container-clients', {
    slidesPerView: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


