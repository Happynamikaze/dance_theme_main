let ham = document.querySelector('.mobile_menu');
let menu = document.querySelector('.main_menu');
let menuClose = document.querySelector('.menu_close');

ham.addEventListener('click', ()=> {
    menuToggle();
});

menuClose.addEventListener('click', ()=> {
    menuToggle();
});

function menuToggle() {
    menu.classList.toggle('visible');
}
