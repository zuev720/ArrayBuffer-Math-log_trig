import MathCharacter from '../character-classes/MathCharacter';

it('Создание экземпляра класса должно совпадать', () => {
  const received = new MathCharacter();
  expect(received).toEqual({
    health: 100,
    level: 1,
    _attack: 0,
    defence: 0,
    _type: 'MathCharacter',
    _distance: 1,
    _stoned: false,
  });
});

it('При задании характеристик свойствам экземпляра класса данные должны совпадать', () => {
  const math = new MathCharacter();
  math.stoned = true;
  math.distance = 5;
  expect(math).toEqual({
    health: 100,
    level: 1,
    _attack: 0,
    defence: 0,
    _type: 'MathCharacter',
    _distance: 5,
    _stoned: true,
  });
});

it('При задании некорректного значения свойства экземпляру клласса, должна выбрасываться ошибка', () => {
  const error1 = 'Недопустимая дистанция!';
  const error2 = 'Некорректное значение свойства stoned';
  expect(() => {
    new MathCharacter().distance = 0;
  }).toThrowError(error1);
  expect(() => {
    new MathCharacter().distance = 10;
  }).toThrowError(error1);
  expect(() => {
    new MathCharacter().stoned = 1;
  }).toThrowError(error2);
  expect(() => {
    new MathCharacter().stoned = 'yes';
  }).toThrowError(error2);
});
