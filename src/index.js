import readlineSync from 'readline-sync';

const takeName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello,', name);
  return name;
};

// const chooseGame = () => {
//   const index = readlineSync.keyInSelect(games, 'Please choose the game: ');
//   return gamesFunc[index];
// };

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
};

const core = (game, rounds = 3, rules = 'Game without rules :)') => {
  let errFlag = false;
  console.log('Welcome to the Brain Games!\n');
  console.log(rules);
  const name = takeName();
  const round = (attempts) => {
    if (errFlag) {
      return;
    }
    if (attempts < 1) {
      console.log(`Congratulations, ${name}`);
      return;
    }
    const answer = game(name);
    const response = readlineSync.question(answer.question);
    if (answer.correct === response) {
      console.log('Correct!');
    } else {
      const errMessage = `«${response}» is wrong answer ;(. Correct answer was «${answer.correct}». Let's try again, ${name}`;
      console.log(errMessage);
      errFlag = true;
    }
    round(attempts - 1);
  };
  round(rounds);
};

export { core, getRandomInt };

