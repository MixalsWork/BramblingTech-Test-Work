const burgerButton = document.querySelector('.menu__burger')
const burgerMenu = document.querySelector('.menu__nav')
const burgerList = document.querySelector('.menu__list');
const menu = document.querySelector('.menu')

burgerButton.addEventListener('click', function(){
    menu.classList.toggle('menu-fixed');
    burgerMenu.classList.toggle('menu__nav-active');
    burgerList.classList.toggle('menu__list-active')
})