const hamburger = document.queryselector('.header .nav-bar .nav-list .hamburger');
const hamburger = document.queryselector('.header .nav-bar .nav-list .hamburger ul');
const hamburger = document.queryselector('.header .container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mabile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrolly;
    if (scroll_position > 250) {
        Headers.style.backgroundColor = '#29323';
    } else {
        Headers.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classlist.toggle('active')
    });
});
}