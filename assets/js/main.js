const menuEl = document.querySelector('.menu');
const menuToggleEl = document.querySelector('.menu-toggle');

window.addEventListener('click', (e) => {
  if (menuToggleEl.contains(e.target)) {
    menuEl.classList.toggle('menu--open');
  } else {
    menuEl.classList.toggle('menu--open', false);
  }
});
