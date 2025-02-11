// Select Document Object Model Items

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item'); // grabs all of the navbar options in a node list

// Set Initial State of Menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (showMenu == false) {
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State to True
        showMenu = true;

    }
    else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State to False
        showMenu = false;

    }
}