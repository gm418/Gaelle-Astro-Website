const sections = document.querySelectorAll('section');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let entryBgColor = window.getComputedStyle(entry.target).backgroundColor;
            document.getElementById('header').style.backgroundColor = entryBgColor;
        }
    });
}, {threshold: 0.99});

sections.forEach(section => {
    observer.observe(section);
});
