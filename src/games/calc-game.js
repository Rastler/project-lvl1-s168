import { cons, car, cdr } from 'hexlet-pairs';
import { core, getRandomInt } from '..';

const minRand = 1;
const maxRand = 10;
const rules = 'What is the result of the expression?';

const sum = pair => car(pair) + cdr(pair);
const sub = pair => car(pair) - cdr(pair);
const mult = pair => car(pair) * cdr(pair);
const operatons = [cons(sum, '+'), cons(sub, '-'), cons(mult, '*')];

const gameGenerator = () => {
  const a = getRandomInt(minRand, maxRand);
  const b = getRandomInt(minRand, maxRand);
  const operationPair = operatons[getRandomInt(0, 2)];
  const numbers = cons(a, b);
  const fn = car(operationPair);
  const correct = String(fn(numbers));
  const question = `${a} ${cdr(operationPair)} ${b}`;
  return { correct, question };
};

export default () => {
  core(gameGenerator, rules);
};
