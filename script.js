// Tableau des thèmes
const themes = [
  {name: 'Light', message: 'Hello sunshine — Light theme is on!'},
  {name: 'Dark', message: 'The night is yours — Dark theme is on!'},
  {name: 'Ocean', message: 'Blue skies and high tides — Ocean theme is on!'},
  {name: 'Nord', message: 'The frost has settled - Nord theme is on!'}
];

// Définition des variables
const menu = document.getElementById('theme-dropdown');
const button = document.querySelector('button');

// Affichage du menu
button.addEventListener('click', () => {
  const isHidden = menu.toggleAttribute('hidden');
  button.setAttribute('aria-expanded', String(!isHidden));
});
