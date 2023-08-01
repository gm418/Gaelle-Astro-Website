/*==================== ACTIVE LINK IN NAVBAR WHEN SCROLLING ====================*/
function scrollActive() {
    const scrollPosition = window.scrollY,
        sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionParentTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id');

        if (sectionParentTop <= scrollPosition && (sectionParentTop + sectionHeight) > scrollPosition) {
            const currentNavLink = document.querySelector('a.nav__link[href*=' + sectionId + ']');
            currentNavLink.classList.add('js-active-link');
            currentNavLink.setAttribute('aria-current', 'page');
        } else {
            const navLink = document.querySelector('a.nav__link[href*=' + sectionId + ']');
            navLink.classList.remove('js-active-link');
            navLink.removeAttribute('aria-current');
        }
    });
    
}

window.addEventListener('scroll', scrollActive);
