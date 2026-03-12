import { socialMediaComments } from "./comments.js";

// 2. Создать массив чисел от 1 до 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fiveNumbers = numbers.filter(number => number >= 5);

console.log(fiveNumbers);

// 3. Создать массив строк и проверить, есть ли там какая-то определенная сущность

const furniture = ['Стул', 'Стол', 'Шкаф', 'Тумбочка', 'Кресло'];
const checkFurniture = furniture.find(furniture => furniture == 'Шкаф');

console.log(checkFurniture);

// 4. Написать функцию, которая будет переворачивать массив

function getReversedArray(array) {
  return array.reverse();
}

console.log(getReversedArray(numbers));
console.log(getReversedArray(furniture));

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых
// содержит ".com"

const usersCom = socialMediaComments.filter(user => user.email.includes('.com'));
console.log(usersCom);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5
// имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedUserPostId = socialMediaComments.map(user => ({
  ...user,
  postId: user.id <= 5 ? 2 : 1
}));

console.log(updatedUserPostId);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const userNameAndId = socialMediaComments.map(user => ({
  name: user.name,
  id: user.id
}));

console.log(userNameAndId);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
// если длина тела сообщения (body) больше 180 символов - устанавливаем true,
// меньше - false.

const addIsInvalidProperty = socialMediaComments.map(user => ({
  ...user,
  isInvalid: user.body.length > 180 ? true : false
}));

console.log(addIsInvalidProperty);

// Вывести массив почт с помощью reduce() и провернуть тоже самое
// с помощью метода map()

const usersEmailsReduce = socialMediaComments.reduce((emails, user) => {
  emails.push(user.email);
  return emails;
}, []);

console.log(usersEmailsReduce);

const userEmailsMap = socialMediaComments.map(user => user.email);
console.log(userEmailsMap);

// Перебрать массив с задания №11 и привести его к строке

const arrayToString = usersEmailsReduce.toString();
console.log(arrayToString);

const arrayJoin = userEmailsMap.join(', ');
console.log(arrayJoin);