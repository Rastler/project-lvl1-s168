import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomInt, displayWelcome } from '..';

const calcGame = (name, minRand = 1, maxRand = 5) => {
  const sum = pair => car(pair) + cdr(pair);
  const sub = pair => car(pair) - cdr(pair);
  const mult = pair => car(pair) * cdr(pair);
  const operatons = [cons(sum, '+'), cons(sub, '-'), cons(mult, '*')];
  displayWelcome('What is the result of the expression?');
  const iter = (index) => {
    if (index > operatons.length - 1) {
      console.log('Congratulations, ', name);
      return;
    }
    const numbers = cons(getRandomInt(minRand, maxRand), getRandomInt(minRand, maxRand));
    const fn = car(operatons[index]);
    const result = fn(numbers);
    console.log('Question: ', car(numbers), cdr(operatons[index]), cdr(numbers));
    const response = readlineSync.question('> ');
    if (result === Number(response)) {
      console.log('Correct!');
    } else {
      const error = `${response} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}`;
      console.log(error);
      return;
    }
    iter(index + 1);
  };
  iter(0);
};

export default calcGame;
