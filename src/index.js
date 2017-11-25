import readlineSync from 'readline-sync';

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

const core = (gameGenerator, rules = '') => {
  let errFlag = false;
  console.log('Welcome to the Brain Games!\n');
  console.log(rules);
  const name = takeName();
  if (rules === '') {
    return;
  }
  const round = (attempts) => {
    if (errFlag) {
      return;
    }
    if (attempts < 1) {
      console.log(`Congratulations, ${name}`);
      return;
    }
    const answer = gameGenerator(name);
    const response = readlineSync.question(`Question: ${answer.question}\n> `);
    if (answer.correct === response) {
      console.log('Correct!');
    } else {
      console.log(`«${response}» is wrong answer ;(. Correct answer was «${answer.correct}». Let's try again, ${name}`);
      errFlag = true;
    }
    round(attempts - 1);
  };
  round(3);
};

export { core, getRandomInt };

