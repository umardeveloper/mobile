const elHamburgerBtn = document.querySelector('.header-humburger-button');
const elHeader = document.querySelector('.header');



elHamburgerBtn.addEventListener('clic', (evt) => {
    elHeader.classList.toggle('.header-open');
});