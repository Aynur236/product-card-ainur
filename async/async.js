const usersContainer = document.getElementById('users-container');
const loadUsersButton = document.getElementById('load-users-button');
const deleteUsersButton = document.getElementById('delete-users-button');
const loadingStatus = document.getElementById('loading-status');

async function loadUsers() {
  const localData = localStorage.getItem('users');
  if (localData) {
    const parsedData = JSON.parse(localData);
    console.log('Данные из локального хранилища: ', parsedData);
    renderUsers(parsedData.users);
  } else {
    try {
      const response = await fetch('users.json');
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }
      const data = await response.json();
      console.log('Данные получены сервером: ', data);
      setTimeout(() => {
        localStorage.setItem('users', JSON.stringify(data));
        console.log('Данные сохранены в локальное хранилище');
        renderUsers(data.users);
      }, 2000);
    } catch(error) {
      console.error('Поймали ошибку: ', error.message);
      usersContainer.innerHTML = `<p style="color: red;">Ошибка загрузки данных</p>`;
    }
  }
}

loadUsers();

function renderUsers(usersArray) {
  usersContainer.innerHTML = '';
  loadingStatus.style.display = 'none';
  usersArray.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.style.cssText = 'border: 1px solid black; padding: 10px; margin: 10px;'
    const title = document.createElement('h3');
    title.textContent = `${user.name} ${user.surname}`;
    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;
    const age = document.createElement('p');
    age.textContent = `Возраст: ${user.age}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-user-btn');
    deleteBtn.addEventListener('click', () => {
      const localData = JSON.parse(localStorage.getItem('users'));
      const filteredUsers = localData.users.filter(u => u.id !== user.id);
      localData.users = filteredUsers
      localStorage.setItem('users', JSON.stringify(localData));
      renderUsers(filteredUsers);
    });
    userCard.append(title, email, age, deleteBtn);
    usersContainer.append(userCard);
  });
} 

deleteUsersButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  usersContainer.innerHTML = '';
});

loadUsersButton.addEventListener('click', async () => {
  const localData = JSON.parse(localStorage.getItem('users'));
  try {
    const response = await fetch('users.json');
    const originalData = await response.json();
    if (localData && localData.users.length === originalData.users.length) {
      alert('Все пользователи уже отображены!');
    } else {
      localStorage.removeItem('users');
      loadUsers();
    }
  } catch (error) {
    console.error('Ошибка при проверке базы:', error);
  }
});