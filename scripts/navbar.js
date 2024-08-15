function toggleScroll() {
    const body = document.body;
    const navbarToggler = document.querySelector('.navbar-toggler');
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}
