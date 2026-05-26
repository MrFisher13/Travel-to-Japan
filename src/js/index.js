// Find all compulsory nodes
const header = document.querySelector('.header');
const menuBurger = document.querySelector('.menu__burger');
const burgerBtn = document.querySelector('span');
const menuNav = document.querySelector('.header__nav');
const body = document.body;


// Appear background header during scroll page
window.addEventListener('scroll', () => {
    window.pageYOffset > 50 ? header.classList.add('active') : header.classList.remove('active');
})

// Open/Close menuBurger + hide background of header
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuNav.classList.toggle('active');

    window.innerWidth <= 767 ? header.classList.remove('active') : '';

    body.classList.toggle('noscroll');
});

// Scroll to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Take current height header (change to scroll)
            const headerHeight = header.clientHeight; // or 'offsetHeight' if it's border

            // Primery way: useing scrollIntoView take into consider header
            // Property 'block: start' press to the top window
            // Deduct height of header to content doesn't appear below it
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });

            // Alternative way with headerHeight for old brows
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            
            // Cheking if the menu's active (Click to the link on the desktop)
            if (menuBurger.classList.contains('active')) {
                menuBurger.classList.remove('active');
                menuNav.classList.remove('active');
                body.classList.remove('noscroll');
            }
        }
    });
});