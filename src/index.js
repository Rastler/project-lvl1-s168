import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';

const gamesFunc = [evenGame, calcGame];
const games = ['Even game', 'Calucation game'];

const displayWelcome = (message = 'Welcome to the Brain Games!\n') => {
  console.log(message);
};

const chooseGame = () => {
  const index = readlineSync.keyInSelect(games, 'Please choose the game: ');
  return gamesFunc[index];
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

const app = () => {
  displayWelcome();
  const name = takeName();
  const game = chooseGame();
  game(name);
};

export { displayWelcome, getRandomInt, even };
export default app;
