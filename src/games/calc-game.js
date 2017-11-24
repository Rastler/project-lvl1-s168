import { cons, car, cdr } from 'hexlet-pairs';
import { core, getRandomInt } from '..';

const minRand = 1;
const maxRand = 10;
const rules = 'What is the result of the expression?';

const sum = pair => car(pair) + cdr(pair);
const sub = pair => car(pair) - cdr(pair);
const mult = pair => car(pair) * cdr(pair);
const operatons = [cons(sum, '+'), cons(sub, '-'), cons(mult, '*')];
let index = 0;

const game = () => {
  const a = getRandomInt(minRand, maxRand);
  const b = getRandomInt(minRand, maxRand);
  const numbers = cons(a, b);
  const fn = car(operatons[index]);
  const correct = String(fn(numbers));
  const conditions = `${a} ${cdr(operatons[index])} ${b}`;
  index += 1;
  return { correct, conditions };
};

export default () => {
  core(game, rules);
};
