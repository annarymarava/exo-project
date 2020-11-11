
let burgerIcon = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let headerListSubstrate = document.querySelector('.header-list-substrate');


burgerIcon.addEventListener('click', function () {
  let htmlWidth = document.documentElement.clientWidth;
  let bodyPadding = window.innerWidth - htmlWidth;
  burgerMenu.classList.remove('close');
  headerListSubstrate.classList.remove('close');
  body.style.paddingRight = bodyPadding + 'px';
  body.classList.add('hidden-scroll');
  burgerMenu.classList.add('active');
  headerListSubstrate.classList.add('active');
});

headerListSubstrate.addEventListener('click', function () {
  burgerMenu.classList.remove('active');
  headerListSubstrate.classList.remove('active');
  body.classList.remove('hidden-scroll');
  body.style.paddingRight = 0;
  burgerMenu.classList.add('close');
  headerListSubstrate.classList.add('close');
});

window.addEventListener('scroll', function () {
  let headerBody = document.querySelector('.header-body');
  headerListSubstrate.classList.toggle('fixed', window.scrollY > 350);
  headerBody.classList.toggle('fixed', window.scrollY > 350);
})

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


if (window.matchMedia('(max-width: 1250px)').matches) {
  var swiper = new Swiper('.swiper-container-team', {
    slidesPerView: 2,
    spaceBetween: 29,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if (window.matchMedia('(max-width: 650px)').matches) {
  var swiper = new Swiper('.swiper-container-team', {
    slidesPerView: 1,
    spaceBetween: 29,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if (window.matchMedia('(max-width: 1000px)').matches) {
  var swiper = new Swiper('.swiper-container-clients', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (window.matchMedia('(max-width: 500px)').matches) {
  var swiper = new Swiper('.swiper-container-clients', {
    slidesPerView: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (window.matchMedia('(max-width: 400px)').matches) {
  var swiper = new Swiper('.swiper-container-clients', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

if (window.matchMedia('(max-width: 1000px)').matches) {
  var swiper = new Swiper('.swiper-container-pircing', {
    slidesPerView: 1,
    spaceBetween: 29,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}