import { core, getRandomInt } from '..';

const maxNumber = 30;
const rules = 'Guess a prime number or not.';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  const iter = (n) => {
    if ((number % n) === 0) {
      return false;
    }
    if ((n * n) <= number) {
      return iter(n + 1);
    }
    return true;
  };
  return iter(2);
};

const gameGenerator = () => {
  const number = getRandomInt(1, maxNumber);
  return { correct: isPrime(number) ? 'yes' : 'no', question: `${number}` };
};

export default () => {
  core(gameGenerator, rules);
};
