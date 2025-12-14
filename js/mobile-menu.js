(() => {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menu = document.querySelector('.js-menu-container');

  if (!openMenuBtn || !closeMenuBtn || !menu) {
    return;
  }

  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
})();