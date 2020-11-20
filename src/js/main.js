
let burgerIcon = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let headerListSubstrate = document.querySelector('.header-list-substrate');
let html = document.querySelector('html');


burgerIcon.addEventListener('click', function () {
  let htmlWidth = document.documentElement.clientWidth;
  let bodyPadding = window.innerWidth - htmlWidth;
  burgerMenu.classList.remove('close');
  headerListSubstrate.classList.remove('close');
  body.style.paddingRight = bodyPadding + 'px';
  html.classList.add('hidden-scroll');
  burgerMenu.classList.add('active');
  headerListSubstrate.classList.add('active');
});

headerListSubstrate.addEventListener('click', function () {
  burgerMenu.classList.remove('active');
  headerListSubstrate.classList.remove('active');
  html.classList.remove('hidden-scroll');
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
  slidesPerView: 1,
  spaceBetween: 29,
  freeMode: true,
  freeModeSticky: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    649: { slidesPerView: 2 },
    1249: { slidesPerView: 4 }
  }
});

var swiper = new Swiper('.swiper-container-clients', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  nextButton: '#js-prev1',
  prevButton: '#js-next1',
  breakpoints: {
    1000: { slidesPerView: 6 },
    500: { slidesPerView: 3 },
    400: { slidesPerView: 2 }
  }
});


var swiper = new Swiper('.swiper-container-pircing', {
  slidesPerView: 1,
  spaceBetween: 29,
  freeMode: true,
  freeModeSticky: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    999: {
      slidesPerView: 3
    }
  }
});



let btnsCategories = document.querySelector('.categories');

let removeClass = function (arr, className) {
  arr
    .filter(btn => btn.classList.contains(className))
    .map(btn => btn.classList.remove(className));
};

btnsCategories.addEventListener('click', function (e) {
  if (!e.target.closest('li')) return;
  let btn = e.target.closest('button');
  if (btn.classList.contains('active-sorting')) return;
  let btns = document.querySelectorAll('.categories button');


  let arrBtns = Array.prototype.slice.call(btns);

  removeClass(arrBtns, 'active-sorting');

  btn.classList.add('active-sorting');

  let btnId = btn.id;
  let photoPortfolio = document.querySelectorAll('.photo-portfolio')
  let arrPhotoPortfolio = Array.prototype.slice.call(photoPortfolio);

  removeClass(arrPhotoPortfolio, 'visual-sorting');
  if (btnId == 'all') return;

  arrPhotoPortfolio
    .filter(photo => (photo.dataset.sorting != btnId))
    .map(photo => photo.classList.add('visual-sorting'));
});

;

let btnSubmitSubscribe = document.querySelector('.btn-submit-subscribe');

btnSubmitSubscribe.addEventListener('click', function () {
  let subscribeName = document.querySelector('#name');
  let subscribeEmail = document.querySelector('#email');
  let errorMessageCorrect = document.querySelector('.error-message-correct');
  let errorMessageNull= document.querySelector('.error-message-null');
  let errorEmailCorrect = document.querySelector('.error-email-correct');
  let errorEmailNull= document.querySelector('.error-email-null');
  errorMessageCorrect.classList.remove('show-error-message');
  errorMessageNull.classList.remove('show-error-message');
  let informationInputName = subscribeName.value;
  let informationInputEmail = subscribeEmail.value;
  errorEmailCorrect.classList.remove('show-error-message');
  errorEmailNull.classList.remove('show-error-message');
  let emailPattern = (/^([_a-zA-Z-0-9\.]{1})[_a-zA-Z-0-9\.]{3,20}[@]{1}[a-zA-Z]{2,10}[.]{1}[a-zA-Z]{2,5}/g);
  let userNamePattern = (/[^a-zA-Zа-яА-Я]/g);
  
  if (!informationInputName) { 
    errorMessageNull.classList.add('show-error-message') 
  };

  if (informationInputName.match(userNamePattern)) { 
    errorMessageCorrect.classList.add('show-error-message')
  };

  if (!informationInputEmail) { 
    errorEmailNull.classList.add('show-error-message') 
  };
  
  if (!informationInputEmail.match(emailPattern))
  { 
    errorEmailCorrect.classList.add('show-error-message')
  };
});

