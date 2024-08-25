function toggleScroll() {
    const body = document.body;
    const containerNavMain = document.querySelector('.container-nav-main');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
    const maxWidth = window.matchMedia("(max-width: 990px)");
    if (isExpanded && maxWidth.matches) {
        containerNavMain.style.height = '100vh';
        body.style.overflow = 'hidden';
    } else {
        containerNavMain.style.height = ''; 
        body.style.overflow = ''; 
    }
}
