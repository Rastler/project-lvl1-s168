import readlineSync from 'readline-sync';

const showWelcome = () => {
  console.log('Welcome to the Brain Games! Answer "yes" if number even otherwise answer "no".');
};

const takeName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello,', name);
  return name;
};

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

const even = n => !(n % 2);

const evenApp = (rounds = 3, minRand = 1, maxRand = 25) => {
  showWelcome();
  const name = takeName();
  const iter = (attempts) => {
    if (attempts < 1) {
      console.log('Congratulations, ', name);
      return;
    }
    const num = getRandomInt(minRand, maxRand);
    const response = readlineSync.question(
      'Question: $<defaultInput>: ',
      { defaultInput: num },
    );
    if ((even(num) && response === 'yes') || (!even(num) && response === 'no')) {
      console.log('Correct!');
    } else {
      console.log('"', response, '" is wrong answer ;(. Correct answer was "', response === 'yes' ? 'no' : 'yes', '". Let\'s try again,', name);
      return;
    }
    iter(attempts - 1);
  };
  iter(rounds);
};

export default evenApp;
