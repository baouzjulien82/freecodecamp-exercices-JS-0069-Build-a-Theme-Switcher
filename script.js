// Tableau des thèmes
const themes = [
  {name: 'light', message: 'Hello sunshine — Light theme is on!'},
  {name: 'dark', message: 'The night is yours — Dark theme is on!'},
  {name: 'ocean', message: 'Blue skies and high tides — Ocean theme is on!'},
  {name: 'nord', message: 'The frost has settled - Nord theme is on!'}
];

// Définition des variables
const menu = document.getElementById('theme-dropdown');
const button = document.getElementById('theme-switcher-button');
const menuItems = document.querySelectorAll('li');
const textStatus = document.getElementById('status');

// Gestion de l'affichage du menu
button.addEventListener('click', () => {
  const isHidden = menu.toggleAttribute('hidden');
  button.setAttribute('aria-expanded', String(!isHidden));
});

// Masquage du menu depuis document
document.addEventListener('click', (event) => {
  if (menu.getAttribute('hidden') !== null) return;
  // Si le clic vient du bouton ou du menu lui-même, ne rien faire
  if (button.contains(event.target) || menu.contains(event.target)) return;

  // Sinon, cacher le menu
  menu.setAttribute('hidden', '');
  button.setAttribute('aria-expanded', 'false');
});


// Selection des thèmes
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    themes.forEach(theme => {
    if (theme.name.toLowerCase() === item.textContent.toLowerCase().trim()) {
      textStatus.textContent = theme.message;
      menu.setAttribute('hidden', '');
      button.setAttribute('aria-expanded', 'false');
      document.body.classList.remove(...themes.map(t => `theme-${t.name}`));
document.body.classList.add(`theme-${theme.name}`);

console.log(item.id);
    };
  });
  });
});
