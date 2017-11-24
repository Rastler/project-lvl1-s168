import { core, getRandomInt } from '..';

const minRand = 1;
const maxRand = 5;
const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const a = getRandomInt(minRand, maxRand);
  const b = getRandomInt(minRand, maxRand);
  const correct = String(gcd(a, b));
  const conditions = `${a} ${b}`;
  return { correct, conditions };
};

export default () => {
  core(game, rules);
};
