const menu = document.querySelector('.menu');

function expandMenu() {
  const hamburgerBtn = document.querySelector('.hamburgerBtn');
  hamburgerBtn.addEventListener('click', () => {
    menu.style.pointerEvents = 'all';
    menu.classList.toggle('active');
  });
}

function closeMenu() {
  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    menu.style.pointerEvents = 'none';
    menu.classList.toggle('active');
  });
}

expandMenu();
closeMenu();