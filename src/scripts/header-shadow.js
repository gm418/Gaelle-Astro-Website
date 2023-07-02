/*==================== ADD BOXSHADOW TO THE HEADER WHEN SCROLLING ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll > 80 viewport's height, scroll-header class is added to the header tag.
    if(this.pageYOffset >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);
