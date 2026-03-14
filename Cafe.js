export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  };

  getCafeInfo() {
    return `Название кафе ${this.name}, расположение ${this.location}`;
  };

  orderDrink(drink) {
    console.log(`Новый заказ в кафе "${this.name}"`);
    console.log(drink.serveDrink());
    console.log(`Спасибо за заказ!`);
  };
};