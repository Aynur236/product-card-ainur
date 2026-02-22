import { productCards } from "./product-cards-info.js";

const productCardTemplate = document.getElementById("product-card-template");
const nameAndDescription = productCards.reduce((acc, productCards) => {
  const newObj = {
    [productCards.name]: productCards.description
  }
  acc.push(newObj);
  return acc;
}, []);

console.log('Результат работы reduce:', nameAndDescription);

function getCardsAmount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const amount = Number(userInput);
  if (amount >= 1 && amount <= 5) {
    return amount;
  } else {
    alert("Ошибка! Вы ввели неверное значение. Покажу по умолчанию 5 карточек.");
    return 5;
  }
}

function renderProductCards(productCards) {
  const productCardsList = document.getElementById("product-cards-list");
  productCardsList.innerHTML = ""
  const fragment = document.createDocumentFragment();
  productCards.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    productCardClone.querySelector('.product-img').src = `imgs/${productCard.imgName}.png`;
    productCardClone.querySelector('.product-type').textContent = productCard.type;
    productCardClone.querySelector('.product-name').textContent = productCard.name;
    productCardClone.querySelector('.product-description').textContent = productCard.description;

    const productCardCompound = productCardClone.querySelector('.product-compound');
    productCard.compound.forEach(compound => {
      const productCardCompoundItem = document.createElement('li');
      productCardCompoundItem.textContent = compound;
      productCardCompound.appendChild(productCardCompoundItem);
    });

    productCardClone.querySelector('.product-price').textContent = productCard.price.toLocaleString('ru-RU', {
      currency: 'RUB',
      style: 'currency',
      maximumFractionDigits: 0
    });
    fragment.appendChild(productCardClone);
  });
  productCardsList.appendChild(fragment);
}

const cardsToShow = getCardsAmount();
const slicedCards = productCards.slice(0, cardsToShow);
renderProductCards(slicedCards);