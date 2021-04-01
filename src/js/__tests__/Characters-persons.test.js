import Magician from '../character-classes/Magician';
import Daemon from '../character-classes/Daemon';

it('При создании экземпляров класса данные должны совпадать', () => {
  const Marlin = new Magician('Marlin');
  const Velzevul = new Daemon('Velzevul');
  Velzevul.stoned = true;
  expect(Marlin).toEqual({
    _name: 'Marlin',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    _type: 'Magician',
    _distance: 1,
    _stoned: false,
  });

  expect(Velzevul).toEqual({
    _name: 'Velzevul',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    _type: 'Daemon',
    _distance: 1,
    _stoned: true,
  });
});

it('При задании разных характеристик экземпляру класса, значение свойства "attack" должно совпадать', () => {
  const Marlin = new Magician('Marlin');
  const Velzevul = new Daemon('Velzevul');
  Marlin.distance = 2;
  Velzevul.distance = 2;
  Velzevul.stoned = true;
  expect(Marlin.attack).toBe(90);
  expect(Velzevul.attack).toBe(85);
});
