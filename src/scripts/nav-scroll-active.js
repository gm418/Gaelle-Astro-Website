/*==================== ACTIVE LINK IN NAVBAR WHEN SCROLLING ====================*/
function scrollActive() {
    const scrollPosition = window.scrollY,
        sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionParentTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id');

        if (sectionParentTop <= scrollPosition && (sectionParentTop + sectionHeight) > scrollPosition) {
            document.querySelector('a.nav__link[href*=' + sectionId + ']').classList.add('js-active-link');
        } else {
            document.querySelector('a.nav__link[href*=' + sectionId + ']').classList.remove('js-active-link');
        }
    });
    
}

window.addEventListener('scroll', scrollActive);
