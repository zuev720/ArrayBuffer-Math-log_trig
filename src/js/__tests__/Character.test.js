import Character from '../character-classes/Character';

it('Создание персонажа должно совпадать', () => {
  expect(new Character()).toEqual({
    _type: 'Character',
    _attack: 0,
    defence: 0,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа не должно совпадать', () => {
  expect(new Character()).not.toEqual({
    _type: 'Character',
    attack: 10,
    defence: 20,
    health: 50,
    level: 10,
  });
});

it('Создание персонажа с именем меньше двух символов должен выбрасывать ошибку', () => {
  const error = 'Некорректное имя персонажа!';
  expect(() => {
    new Character().name = 'C';
  }).toThrowError(error);
});

it('Создание персонажа с именем больше десяти символов должен выбрасывать ошибку', () => {
  const error = 'Некорректное имя персонажа!';
  expect(() => {
    new Character().name = 'CharacterCharacterCharacter';
  }).toThrowError(error);
});

it('Персонаж с полем type не соответствующему имени класса должен выбрасывать ошибку', () => {
  const error = 'Некорректный тип персонажа!';
  expect(() => {
    new Character().type = 'MegaCharacter';
  }).toThrowError(error);
});

it('Должен возвращать корректный type класса', () => {
  expect(new Character().type).toBe('Character');
});
