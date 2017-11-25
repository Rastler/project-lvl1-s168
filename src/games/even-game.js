import { core, getRandomInt } from '..';

const minRand = 1;
const maxRand = 25;
const rules = 'Answer "yes" if number even otherwise answer "no".';

const even = n => !(n % 2);

const gameGenerator = () => {
  const num = getRandomInt(minRand, maxRand);
  const correct = even(num) ? 'yes' : 'no';
  const question = `${num}`;
  return { correct, question };
};

export default () => {
  core(gameGenerator, rules);
};
