const usersContainer = document.getElementById('users-container');
const loadUsersButton = document.getElementById('load-users-button');
const deleteUsersButton = document.getElementById('delete-users-button');

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
  usersArray.forEach(user => {
    usersContainer.innerHTML += `
      <div class="user-card" style="border: 1px solid black; margin: 10px; padding: 10px;">
        <h3>${user.name} ${user.surname}</h3>
        <p>Возраст: ${user.age}</p>
        <p>Email: ${user.email}</p>
        <button class="delete-user-btn" data-id="${user.id}">Удалить</button>
      </div>
    `;
  });
} 

usersContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-user-btn')) {
    const userId = event.target.getAttribute('data-id');
    const localData = localStorage.getItem('users');
    const parsedData = JSON.parse(localData);
    let usersArray = parsedData.users;
    usersArray = usersArray.filter(user => user.id != userId);
    parsedData.users = usersArray;
    localStorage.setItem('users', JSON.stringify(parsedData));
    renderUsers(usersArray);
  }
});

deleteUsersButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  usersContainer.innerHTML = '';
});

loadUsersButton.addEventListener('click', () => {
  const localData = localStorage.getItem('users');
  if (localData) {
    const parsedData = JSON.parse(localData);
    if (parsedData.users.length === 3) {
      alert('Все пользователи уже отображены!');
    } else {
      localStorage.removeItem('users');
      loadUsers();
    }
  } else {
    loadUsers();
  }
});