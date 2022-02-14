/*Dropdown Menu*/

let menuLink = document.getElementById('menu-link');
let menuLink2 = document.getElementById('menu-link-2');
let menuContent = document.getElementById('menu-content');
let header = document.querySelector('header')
let bottomArea = document.getElementById('menu-bottom-area');
let closeButton = document.getElementById('close-button');
let closeButtonResponsive = document.getElementById('close-button-responsive');
let mediaQuery = window.matchMedia('(max-width: 820px)')
let mediaQueryB = window.matchMedia('(min-width: 820px)')

let open = function() {
  menuContent.style.display = 'block';
  header.style.height = '100vh';
  header.style.display = 'grid';
  bottomArea.style.display = 'block';
  closeButton.style.display = 'block';
  menuLink.style.display = 'none';
  menuLink2.style.display = 'block';
  document.body.style.overflow = 'hidden'
};

let close = function() {
  menuContent.style.display = 'none';
  header.style.height = 'auto';
  header.style.display = 'block';
  bottomArea.style.display = 'none';
  closeButton.style.display = 'none';
  menuLink.style.display = 'block';
  menuLink2.style.display = 'none';
  document.body.style.overflow = 'auto'
}

menuLink.addEventListener('click', open);
closeButton.addEventListener('click', close);

/*mediaQuery.addEventListener('change', function () {
  if (mediaQuery.matches) {
    closeButton.style.display = 'none';
  }
});

mediaQueryB.addEventListener('change', function () {
  if (mediaQueryB.matches) {
    closeButton.style.display = 'block';
  }
});*/

/*Slideshow*/