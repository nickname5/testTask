const menu = document.getElementById('nav');

menu.addEventListener('click', handleClick);

function handleClick() {
  if (menu.classList[0] == 'open') {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
}
