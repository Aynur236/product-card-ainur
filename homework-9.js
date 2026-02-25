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

// 5. Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". 
// Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. 
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).
const openModalBtn = document.getElementById('open-modal-btn');
const modalContent = document.getElementById('registration-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

openModalBtn.addEventListener('click', () => {
  modalContent.classList.add('modal-showed');
});

closeModalBtn.addEventListener('click', () => {
  modalContent.classList.remove('modal-showed');
})

// 6. Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - мы должны предупредить его о том, 
// что регистрация отклонена. 
// Если регистрация успешна - выводим значения формы в лог, как в задании №4. 
// Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()). 
// Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться. 
let user

const registrationModalForm = document.querySelector('.registration-modal-form');
registrationModalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const modalForm = event.target;
  if (!modalForm.checkValidity()) {
    alert('Заполните все поля!');
    return;
  }
  const formData = new FormData(modalForm);
  const createdOn = new Date();
  const userData = Object.fromEntries(formData.entries());
  if (userData.password !== userData['password-repeat']) {
    alert('Пароли не совпадают');
    return;
  }
  user = {...userData, createdOn};
  console.log(user);
  modalContent.classList.remove('modal-showed');
})