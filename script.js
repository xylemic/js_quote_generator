let generateQuote = document.getElementById('new-quote');
let toggleDarkMode = document.getElementById('toggleDarkMode');
let quoteText = document.querySelector('.quote');
let authorInfo = document.querySelector('.author-info');
let mainContent = document.querySelector('.main-content');

import {quotes} from './quotes_database/quotes_db.js';

console.log(quotes);

let isDarkmode = localStorage.getItem('darkMode') === 'on';

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.innerText = quotes[randomIndex].quote;
  authorInfo.innerText = quotes[randomIndex].author;
}

generateQuote.addEventListener('click', getRandomQuote);

// toggle dark mode
function darkModeButton() {
  console.log('toggle dark mode');

  isDarkmode = !isDarkmode;

  if (isDarkmode) {
    mainContent.classList.add('dark-mode');
  } else {
    mainContent.classList.remove('dark-mode');
  }

  localStorage.setItem('darkMode', isDarkmode === true ? 'on' : 'off', () => {
    console.log('Dark mode setting saved to local storage');
  });
}

toggleDarkMode.addEventListener('click', () => {
  darkModeButton();
})
// console.log(isDarkmode);


// window.addEventListener('storage', (e) => {
//   if (e.key === 'darkMode') {
//     const isDarkmode = e.newValue === 'on';
//     if (isDarkmode) {
//       mainContent.classList.add('dark-mode');
//     } else {
//       mainContent.classList.remove('dark-mode');
//     }
//   }
// })
