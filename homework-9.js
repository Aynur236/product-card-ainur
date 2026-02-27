// 4. Добавление логики к форме в футере: email должен соответствовать стандартам (добавить валидацию), 
// если он не заполнен - форма не отправляется. Кнопка "Подписаться" и есть "отправкой формы", 
// при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
const footerNewsletterForm = document.querySelector('.footer-newsletter-form');
footerNewsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newsLetterForm = event.target;
  const formData = new FormData(newsLetterForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});