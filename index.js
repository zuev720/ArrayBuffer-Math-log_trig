import Magician from './src/js/character-classes/Magician';
import Daemon from './src/js/character-classes/Daemon';

const Marlin = new Magician('Marlin');
const Velzevul = new Daemon('Velzevul');
Marlin.distance = 1;
Velzevul.distance = 1;
Velzevul.stoned = true;
console.log(Marlin);
console.log(Velzevul);
