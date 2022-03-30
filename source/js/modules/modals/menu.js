const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');
const headerLogo = document.querySelector('.header__logo');
const pageBody = document.querySelector('.page-body');
const headerWrapper = document.querySelector('.header__wrapper');

const openMenu = () => {
  navMain.classList.remove('header__nav--close');
  navMain.classList.add('header__nav--open');
  navToggle.classList.remove('header__toggle--close');
  navToggle.classList.add('header__toggle--open');
  headerLogo.classList.add('header__logo--hidden');
  pageBody.classList.add('scroll-lock');
  pageBody.classList.add('page-body--mask');

  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.header__nav') && !evt.target.closest('.header__toggle') || evt.target.closest('.header__nav-item')) {
      closeMenu();
    }
  });
};

const closeMenu = () => {
  navMain.classList.add('header__nav--close');
  navMain.classList.remove('header__nav--open');
  navToggle.classList.add('header__toggle--close');
  navToggle.classList.remove('header__toggle--open');
  headerLogo.classList.remove('header__logo--hidden');
  pageBody.classList.remove('scroll-lock');
  pageBody.classList.remove('page-body--mask');
};

const mobileMenu = () => {
  navMain.classList.remove('header__nav--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  headerWrapper.classList.remove('header__wrapper--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {mobileMenu};
