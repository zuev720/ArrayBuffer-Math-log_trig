import Character from './Character';

export default class MathCharacter extends Character {
  constructor() {
    super();
    this._distance = 1;
    this._stoned = false;
  }

  set distance(value) {
    if (value < 1 || value > 9) {
      throw new Error('Недопустимая дистанция!');
    }
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Некорректное значение свойства stoned');
    }
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    this._attack = Math.round(this._attack * (1 - ((this.distance - 1) / 10)));
    if (this._stoned) {
      return Math.round(this._attack - Math.log2(this.distance) * 5);
    }
    return this._attack;
  }
}
