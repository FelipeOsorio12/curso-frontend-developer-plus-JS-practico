const menuEmail= document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', showDesktop)

function showDesktop(){
    desktopMenu.classList.toggle('inactive')

}