// Покраска всех карточек

const changeAllColorCardBtn = document.querySelector('#change-cards-color-btn');
const purpleColorHash = '#aa00ffff'
const greenColorHash = '#00ff99ff'

changeAllColorCardBtn.addEventListener('click', () => {
  const productCards = document.querySelectorAll('.card-container');
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


// Покраска первой карточки

const changeColorFirstCardBtn = document.querySelector('#change-color-first-card-btn');

changeColorFirstCardBtn.addEventListener('click', () => {
  const firstProductCard = document.querySelector('.card-container');
  if (firstProductCard) {
    firstProductCard.style.backgroundColor = purpleColorHash
  }
})

// Октрыть Google

const openGoogleBtn = document.querySelector('#open-google-btn');

openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google.com')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return
  }
}

// Вывод console.log

const outputLogBtn = document.querySelector('#output-console-btn');

outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Задание №6 вывод в консоль заголовка страницы

const pageTitleConsoleLog = document.querySelector('.page-title-text');
pageTitleConsoleLog.addEventListener('mouseover', () => console.log(pageTitleConsoleLog.textContent))

// Задание №7 добавление кнопку, меняющую свой цвет

const switchColorBtn = document.getElementById('switch-color-btn')
switchColorBtn.addEventListener('click', () => {
  switchColorBtn.classList.toggle('bg-color-light-blue')
})
