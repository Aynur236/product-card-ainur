// 3.Создайте объект на основе ваших данных.

userInfo = {
  name: 'Айнур',
  surname: 'Ряжапов',
  mail: 'yt.frost@mail.ru',
  job: 'Frontend Developer',
  age: 25,
  country: 'Саудовская Аравия',
  city: 'Медина',
  relationship: 'Не женат',
  car: 'Toyota RAV4'
}

// 4.Создайте объект, который будет хранить данные об автомобиле
// и добавьте свойсто владелец

carInfo = {
  brand: 'Toyota',
  model: 'RAV4',
  year: '2004',
  color: 'Silver',
  gearbox: 'Automatic'
}

carInfo.owner = userInfo

// 5. Напишите функцию, которая будет проверять 
// наличие свойства "максимальная скорость". 
// Если оно уже есть - прекращает выполннение

function hasMaxSpeed(obj) {
  if (!('maxSpeed' in obj)) {
    carInfo.maxSpeed = '240 км/ч'
    console.log('Максимальная скорость была добавлена')   
  } else {
    return
  }
  return carInfo
}

hasMaxSpeed(carInfo)

console.log(carInfo)

// 6. Напишите функцию, которая принимает первым аргументом объект,
// а вторым его свойство, которое нужно вывести и выводит его

function getObjProperty(obj, key) {
  const value = obj[key]
  return value
}

console.log(getObjProperty(userInfo, 'name'))

// 7. Создайте массив, который содержит названия продуктов(просто строки)

productList = ['Яблоко', 'Молоко', 'Мандарин', 'Апельсин', 'Шоколад']

// 8. Создать массив из объектов, где объектами являются 
// книги(название, автор, год выпуска, цвет обложки, жанр)
// После, добавить еще одну книгу в конец массива с помощью метода Х

bookList = [
  {
    name: 'Горе от ума',
    author: 'А.С. Грибоедов',
    year_of_manufacture: 1828,
    cover_color: 'Золотой',
    genre: 'Сатира'
  },

  {
    name: 'Левша',
    author: 'Н.С. Лесков',
    year_of_manufacture: 1881,
    cover_color: 'Красно-сине-золотой',
    genre: 'Сказ'
  },

  {
    name: 'Война и мир',
    author: 'Л.В. Толстой',
    year_of_manufacture: 1869,
    cover_color: 'Коричневый',
    genre: 'Роман-эпопея'
  }
]
console.log(bookList)

bookList.push({
  name: 'Преступление и наказание',
  author: 'Ф.М. Достоевский',
  year_of_manufacture: 1866,
  cover_color: 'Коричнево-золотой',
  genre: 'Детективный роман'
})

console.log(bookList)

// 9. Создать еще один массив, состоящих из тех же книг,
// но относящийся к определенной вселенной. Объедините эти 2 массива в один

lovecraftList = [
  {
    name: 'Азатот',
    author: 'Г.В. Лавкрафт',
    year_of_manufacture: 1938,
    cover_color: 'Темно-синий',
    genre: 'Фантастика'
  },

  {
    name: 'Безымянный город',
    author: 'Г.В. Лавкрафт',
    year_of_manufacture: 1921,
    cover_color: 'Песочно-коричневый',
    genre: 'Мистический хоррор'
  },

  {
    name: 'Зов Ктулху',
    author: 'Г.В. Лавкрафт',
    year_of_manufacture: 1928,
    cover_color: 'Темно-зеленый',
    genre: 'Космический ужас'
  }
]

const fullList = [...bookList, ...lovecraftList]
console.log(fullList)

// Написать функцию, которая принимает массив сущностей с задания №9.
// Добавляем новое свойство для объекта "isRare"
// и в зависимости от года выпуска книги, устанавливаем True или False.
// Если книга раньше 1900-х, то True, если позже, то False

function addRarity(bookArray) {
  return bookArray.map(fullList => {
    fullList.isRare = fullList.year_of_manufacture < 1900
    return fullList
  })
}

console.log(addRarity(fullList))