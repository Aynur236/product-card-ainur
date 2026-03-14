class Drinks {
  #temperatureOfDrink = 0;
  constructor(name, size, price, targetTemperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.targetTemperature = targetTemperature;
  };

  getDrinkInfo() {
    return `Ваш напиток: название ${this.name}, размер ${this.size}, цена ${this.price
      .toLocaleString(
        'ru-RU',
        {
          style: 'currency',
          currency: 'RUB'
        }
    )}`;
  };

  setTemperature(temperature) {
    if (temperature > 100 || temperature < 0) {
      return 'Температура не может быть такой'
    }
    else {
      this.#temperatureOfDrink = temperature;
      return `Температура вашего напитка ${this.#temperatureOfDrink}`
    }
  };

  #prepareDrink() {
    console.log(`Готовим ваш напиток ${this.name}...`);
    const tempMessage = this.setTemperature(this.targetTemperature);
    console.log(tempMessage);
    console.log(`Нагреваем ваш напиток до ${this.#temperatureOfDrink} градусов...`);
    console.log(`Ваш напиток готов!`);
  };

  serveDrink() {
    this.#prepareDrink();
    return `Пожалуйста, ваш напиток ${this.name} готов!`;
  };
};

export class Coffee extends Drinks {
  constructor(name, size, price, milkType, typeOfGrains) {
    super(name, size, price, 90);
    this.milkType = milkType;
    this.typeOfGrains = typeOfGrains;
  };

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, тип молока ${this.milkType}, тип зерен ${this.typeOfGrains}`;
  };
};

export class Tea extends Drinks {
  constructor(name, size, price, typeOfTea) {
    super(name, size, price, 80);
    this.typeOfTea = typeOfTea;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, тип чая ${this.typeOfTea}`;
  }
}

export class Citrus extends Drinks {
  constructor(name, size, price, typeOfCitrus) {
    super(name, size, price, 10);
    this.typeOfCitrus = typeOfCitrus;
  }

  getDrinkInfo() {
    return `${super.getDrinkInfo()}, тип цитруса ${this.typeOfCitrus}`;
  }
}