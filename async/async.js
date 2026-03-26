const usersContainer = document.getElementById('users-container');
const loadUsersButton = document.getElementById('load-users-btn');
const deleteUsersButton = document.getElementById('delete-users-btn');
const loadingStatus = document.getElementById('loading-status');

function getUsersFromStorage() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : null; 
}

function setUsersToStorage(data) {
  localStorage.setItem('users', JSON.stringify(data));
}

async function getUsers() {
  const response = await fetch('users.json');
  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
  }
  return await response.json(); 
}

async function loadUsers() {
  const localData = getUsersFromStorage();
  if (localData) {
    console.log('Данные из локального хранилища: ', localData);
    renderUsers(localData.users);
  } else {
    try {
      const data = await getUsers();
      console.log('Данные получены сервером: ', data);
      setTimeout(() => {
        setUsersToStorage(data);
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
  const fragment = document.createDocumentFragment();
  usersArray.forEach(user => {
    const userCard = Object.assign(document.createElement('div'), {
      className: 'user-card'
    });
    const deleteBtn = Object.assign(document.createElement('button'), {
      className: 'delete-user-btn',
      textContent: 'Удалить'
    });
    deleteBtn.addEventListener('click', () => {
      const localData = getUsersFromStorage();
      const filteredUsers = localData.users.filter(u => u.id !== user.id);
      localData.users = filteredUsers;
      setUsersToStorage(localData);
      renderUsers(filteredUsers);
    });
    userCard.append(
      Object.assign(document.createElement('h3'), { textContent: `${user.name} ${user.surname}` }),
      Object.assign(document.createElement('p'), { textContent: `Email: ${user.email}` }),
      Object.assign(document.createElement('p'), { textContent: `Возраст: ${user.age}` }),
      deleteBtn
    );
    usersContainer.append(userCard);
  });
}

deleteUsersButton.addEventListener('click', () => {
  const localData = getUsersFromStorage();
  if (!localData || localData.users.length === 0) {
    alert('Все пользователи уже удалены!');
  } else {
    localStorage.removeItem('users');
    usersContainer.innerHTML = '';
    loadingStatus.style.display = 'block';
  }
});

loadUsersButton.addEventListener('click', async () => {
  const localData = getUsersFromStorage();
  try {
    const originalData = await getUsers();
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