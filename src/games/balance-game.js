import { core, getRandomInt } from '..';

const minRand = 10;
const maxRand = 1000;
const rules = 'Balance the given number.';

const maxNumber = arr => Math.max(...arr);

const minNumber = arr => Math.min(...arr);

const balance = (arr) => {
  const len = arr.length;
  if (maxNumber(arr) - minNumber(arr) <= 1) {
    return arr.join('');
  }
  const newArr = arr;
  newArr.sort((a, b) => a - b);
  newArr[0] += 1;
  newArr[len - 1] -= 1;
  return balance(newArr);
};

const gameGenerator = () => {
  const num = String(getRandomInt(minRand, maxRand));
  const correct = balance([...num].map(el => Number(el)));
  const question = `${num}`;
  return { correct, question };
};

export default () => {
  core(gameGenerator, rules);
};
