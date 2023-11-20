const portfolioInformation = document.querySelector('.portfolio__information'),
    portfolioContents = Array.from(portfolioInformation.querySelectorAll('.portfolio__content'));

portfolioContents.forEach(portfolioContent => {
    portfolioContent.addEventListener('click', () => {

        portfolioContents.forEach(elem => {
            elem.classList.remove('js-portfolio__active');
            elem.setAttribute('aria-expanded', 'false');
        });
        portfolioContent.classList.add('js-portfolio__active');
        portfolioContent.setAttribute('aria-expanded', 'true');
    });
});