///////////////////////////////////////////////////////////
// Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Dark/Light Mode button
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
}

///////////////////////////////////////////////////////////
// Language Mode
const langBtn = document.querySelector('#lang-btn');
const translateElements = document.querySelectorAll('.translate');

fetch('./translations.json')
  .then(response => response.json())
  .then(data => {
    let currentLang = 'en';

    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'pt' : 'en';

      translateElements.forEach(element => {
        const key = element.dataset.translationKey;
        element.textContent = data[currentLang][key];
      });
    });
  });