class Game {
  constructor(name, genre, company) {
    this.name = name;
    this.genre = genre;
    this.company = company;
  }
  showInfo() {
    console.log(`Имя игры: ${this.name}, жанр игры: ${this.genre}, компания: ${this.company}`);
  }
}

class CallOfDuty extends Game {
  constructor(name, genre, company, rating) {
    super(name, genre, company);
    this.rating = rating;
  }
  showInfo() {
    console.log(`Имя игры: ${this.name}, жанр игры: ${this.genre}, компания: ${this.company}, рейтинг: ${this.rating}`);
  }
}
const game = new Game('Call of Duty', 'FPS', 'Activision');
const callOfDuty = new CallOfDuty('Call of Duty', 'FPS', 'Activision', 4.5);
game.showInfo();
callOfDuty.showInfo();