const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visibile')

    if (visibility === "false") {
        nav.setAttribute('data-visibile', true);
        navToggle.setAttribute('aria-expanded', true);
    } 

    else if (visibility === "true") {
        nav.setAttribute('data-visibile', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});