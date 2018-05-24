const menuEl = document.querySelector('.menu');
const menuToggleEl = document.querySelector('.menu-toggle');

window.addEventListener('click', (e) => {
  if (menuToggleEl.contains(e.target)) {
    menuEl.classList.toggle('dn');
  } else {
    menuEl.classList.toggle('dn', true);
  }
});
