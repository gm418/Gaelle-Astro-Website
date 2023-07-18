/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

const linkClick = () => {
    const navMenu = document.getElementById('js-nav-menu');
    navMenu.classList.remove('show-menu');
}

// When a nav__link is clicked, the show-menu class is removed from the nav__menu
navLinks.forEach(navLink => navLink.addEventListener('click', linkClick));
