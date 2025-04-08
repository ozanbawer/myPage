const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const navbarMenu = document.querySelector('.navbar_menu');

toggleBtn.onclick = function () {
    navbarMenu.classList.toggle('open');
    const isOpen = navbarMenu.classList.contains('open')

    toggleBtnIcon.classList =isOpen
    ? 'bx bx-border-bottom'
    : 'bx bx-border-right'
}