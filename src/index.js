import readlineSync from 'readline-sync';

const displayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const takeName = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello,', name);
};

const app = () => {
  displayWelcome();
  takeName();
};

export default app;
