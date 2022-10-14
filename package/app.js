const menu = document.querySelector('.menu');

function expandMenu() {
    const hamburgerBtn = document.querySelector('.hamburgerBtn');
    hamburgerBtn.addEventListener('click', () => {
        menu.style.opacity = 1;
        menu.style.pointerEvents = 'all';
    })
}
expandMenu();

function closeMenu() {
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
        menu.style.opacity = 0;
        menu.style.pointerEvents = 'none';
    })
}
closeMenu();