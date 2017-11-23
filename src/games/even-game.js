import { core, getRandomInt } from '..';

const MINRAND = 1;
const MAXRAND = 25;
const ROUNDS = 3;
const RULES = 'Answer "yes" if number even otherwise answer "no".';

const even = n => !(n % 2);

const game = () => {
  const num = getRandomInt(MINRAND, MAXRAND);
  const correct = even(num) ? 'yes' : 'no';
  const question = `Question: ${num} \n> `;
  return { correct, question };
};

export default () => {
  core(game, ROUNDS, RULES);
};
