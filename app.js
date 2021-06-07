const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-links');
    const navlinks = document.querySelectorAll('nav-links li');
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navlinkfade 0.5s ease forwaeds ${index/7+0.3}s';
            }
        });
    });
}

navSlide();