function scrollUp() {
    const scrollTop = document.getElementById('js-scroll-top');
    if(this.pageYOffset >= 560) {
        scrollTop.classList.add('show-scrolltop');
    } else {
        scrollTop.classList.remove('show-scrolltop');
    }
}

window.addEventListener('scroll', scrollUp);
