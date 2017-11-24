import { core, getRandomInt } from '..';

const MINRAND = 1;
const MAXRAND = 5;
const ROUNDS = 3;
const RULES = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const game = () => {
  const a = getRandomInt(MINRAND, MAXRAND);
  const b = getRandomInt(MINRAND, MAXRAND);
  const correct = String(gcd(a, b));
  const question = `Question: ${a} ${b} \n> `;
  return { correct, question };
};

export default () => {
  core(game, ROUNDS, RULES);
};
