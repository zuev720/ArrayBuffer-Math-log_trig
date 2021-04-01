import MathCharacter from './MathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name);
    this.name = name;
    this._attack = 100;
    this.defence = 40;
  }
}
