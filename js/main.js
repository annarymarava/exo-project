
let burger_icon = document.querySelector('.burger-icon');
let burger_menu = document.querySelector('.burger-menu');
let back = document.querySelector('body');
let header_list = document.querySelector('.header-list');

burger_icon.onclick = function () {
    burger_icon.classList.toggle('active');
    burger_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

// // header_list.onclick = function () {
// //     header_list.classList.remove('active');
// //     back.classList.toggle('lock');
// // }

// // back.onclick = function () {
// //     header_list.classList.remove('active');
// //     back.classList.toggle('lock');
// // }


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 29,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });