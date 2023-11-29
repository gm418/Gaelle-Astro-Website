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


/*let sections = document.querySelectorAll('section');
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let bgColor = window.getComputedStyle(entry.target).backgroundColor;

        if (entry.isIntersecting) {
            document.querySelector('header').style.backgroundColor = bgColor;
        }
    });
}, {threshold: 1});

sections.forEach(section => {
    observer.observe(section);
});*/
