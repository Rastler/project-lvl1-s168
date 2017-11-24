import { core, getRandomInt } from '..';

const minRand = 1;
const maxRand = 25;
const rules = 'Answer "yes" if number even otherwise answer "no".';

const even = n => !(n % 2);

const game = () => {
  const num = getRandomInt(minRand, maxRand);
  const correct = even(num) ? 'yes' : 'no';
  const conditions = `${num}`;
  return { correct, conditions };
};

export default () => {
  core(game, rules);
};
