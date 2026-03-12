import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './games.js';
import { Modal } from './Modal.js';
import { Form } from './Form.js';

// 5. Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". 
// Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal. 
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).
const regModal = new Modal('registration-modal');
const openModalBtn = document.getElementById('open-modal-btn');
openModalBtn.addEventListener('click', () => regModal.open());

// 6. Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - мы должны предупредить его о том, 
// что регистрация отклонена. 
// Если регистрация успешна - выводим значения формы в лог, как в задании №4. 
// Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()). 
// Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться. 
let user = {};
const regForm = new Form('registration-modal-form');
const modalForm = document.getElementById('registration-modal-form');
modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regForm.isValid()) {
    alert('Заполните все поля!');
    return;
  }
  const userData = regForm.getValues();
  if (userData.password !== userData['password-repeat']) {
    alert('Пароли не совпадают');
    return;
  }
  user = {...userData, createdOn: new Date()};
  console.log(user);
  regForm.reset();
  regModal.close();
});