const openMenu = () => {
  const navMain = document.querySelector('.header-nav');
  const navToggle = document.querySelector('.header__toggle');
  navMain.classList.remove('header-nav--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header-nav--close')) {
      navMain.classList.remove('header-nav--close');
      navMain.classList.add('header-nav--open');
      navToggle.classList.remove('header__toggle--close');
      navToggle.classList.add('header__toggle--open');
    } else {
      navMain.classList.add('header-nav--close');
      navMain.classList.remove('header-nav--open');
      navToggle.classList.add('header__toggle--close');
      navToggle.classList.remove('header__toggle--open');
    }
  });
};

export {openMenu};

