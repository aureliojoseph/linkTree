///////////////////////////////////////////////////////////
// Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Switch button
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
}