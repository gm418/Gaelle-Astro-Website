const qualificationButtons = document.querySelectorAll('.qualification__button'),
    qualificationContents = document.querySelectorAll('.qualification__content');

qualificationButtons.forEach(qualificationButton => {

    qualificationButton.addEventListener('click', () => {
        let activeContent = document.querySelector(qualificationButton.getAttribute('aria-controls'));

        qualificationButtons.forEach(qualificationButton => {
            qualificationButton.classList.remove('js-qualification__active');
        });
        qualificationButton.classList.add('js-qualification__active');

        qualificationContents.forEach(qualificationContent => {
            qualificationContent.classList.remove('js-qualification__active');
            qualificationContent.setAttribute('aria-hidden', 'true');
        });
        activeContent.classList.add('js-qualification__active');
        activeContent.removeAttribute('aria-hidden');
    });
});