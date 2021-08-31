    const navslide = () => {
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li')

    // toggle nav
    burger.addEventListener('click', () => {
        links.classList.toggle('nav-active');

        // animate links
        menuLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });

}
navslide();