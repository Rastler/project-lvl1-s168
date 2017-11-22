import readlineSync from 'readline-sync';
import { takeName, displayWelcome, even, getRandomInt } from '..';

const evenGame = (name, rounds = 3, minRand = 1, maxRand = 25) => {
  displayWelcome();
  const iter = (attempts) => {
    if (attempts < 1) {
      console.log('Congratulations, ', name);
      return;
    }
    const num = getRandomInt(minRand, maxRand);
    const answer = even(num) ? 'yes' : 'no';
    const response = readlineSync.question(
      'Question: $<defaultInput>: ',
      { defaultInput: num },
    );
    if (answer === response) {
      console.log('Correct!');
    } else {
      const error = `${response} is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${name}`;
      console.log(error);
      return;
    }
    iter(attempts - 1);
  };
  iter(rounds);
};

export default evenGame;
