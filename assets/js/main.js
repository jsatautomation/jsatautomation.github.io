const menuEl = document.querySelector('.menu');
const menuToggleEl = document.querySelector('.menu-toggle');

window.addEventListener('click', (e) => {
  console.log(e.target, e);
  if (menuToggleEl.contains(e.target)) {
    menuEl.classList.toggle('dn');
  } else {
    menuEl.classList.toggle('dn', true);
  }
});
