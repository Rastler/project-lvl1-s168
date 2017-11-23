import { cons, car, cdr } from 'hexlet-pairs';
import { core, getRandomInt } from '..';

const MINRAND = 1;
const MAXRAND = 10;
const ROUNDS = 3;
const RULES = 'What is the result of the expression?';

const sum = pair => car(pair) + cdr(pair);
const sub = pair => car(pair) - cdr(pair);
const mult = pair => car(pair) * cdr(pair);
const operatons = [cons(sum, '+'), cons(sub, '-'), cons(mult, '*')];
let index = 0;

const game = () => {
  const a = getRandomInt(MINRAND, MAXRAND);
  const b = getRandomInt(MINRAND, MAXRAND);
  const numbers = cons(a, b);
  const fn = car(operatons[index]);
  const correct = String(fn(numbers));
  const question = `Question: ${a} ${cdr(operatons[index])} ${b} \n> `;
  index += 1;
  return { correct, question };
};

export default () => {
  core(game, ROUNDS, RULES);
};
