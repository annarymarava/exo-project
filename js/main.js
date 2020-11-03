
let burger_icon = document.querySelector('.burger-icon');
let burger_menu = document.querySelector('.burger-menu');
let back = document.querySelector('body');
let header_list = document.querySelector('.header-list');
let header_list_substrate = document.querySelector('.header-list-substrate');


burger_icon.onclick = function () {
    burger_icon.classList.toggle('active');
    burger_menu.classList.toggle('active');
    header_list_substrate.classList.toggle('active');
    burger_icon.classList.remove('close');
    burger_menu.classList.remove('close');
    header_list_substrate.classList.remove('close');
    back.classList.toggle('lock');
}

header_list_substrate.onclick = function () {
  burger_icon.classList.toggle('close');
  burger_menu.classList.toggle('close');
  header_list_substrate.classList.toggle('close');
  burger_icon.classList.remove('active');
  burger_menu.classList.remove('active');
  header_list_substrate.classList.remove('active');
  back.classList.toggle('lock');
}

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

// // header_list.onclick = function () {
// //     header_list.classList.remove('active');
// //     back.classList.toggle('lock');
// // }

// // back.onclick = function () {
// //     header_list.classList.remove('active');
// //     back.classList.toggle('lock');
// // }


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


