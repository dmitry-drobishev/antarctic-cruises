const openMenu = () => {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__toggle');
  const headerLogo = document.querySelector('.header__logo');

  navMain.classList.remove('header__nav--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--close')) {
      navMain.classList.remove('header__nav--close');
      navMain.classList.add('header__nav--open');
      navToggle.classList.remove('header__toggle--close');
      navToggle.classList.add('header__toggle--open');
      headerLogo.classList.add('header__logo--hidden');
    } else {
      navMain.classList.add('header__nav--close');
      navMain.classList.remove('header__nav--open');
      navToggle.classList.add('header__toggle--close');
      navToggle.classList.remove('header__toggle--open');
      headerLogo.classList.remove('header__logo--hidden');
    }
  });
};

export {openMenu};

