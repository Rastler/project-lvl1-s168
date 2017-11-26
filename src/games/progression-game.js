import { core, getRandomInt } from '..';

const progSize = 10;
const maxStepRand = 5;
const rules = 'What number is missing in this progression?';

const progressionGenerator = (start, step, size) => {
  const progArr = [];
  const iter = (index) => {
    if (index > size - 1) {
      return progArr;
    }
    return iter(progArr.push(start + (step * index)));
  };
  return iter(0);
};

const gameGenerator = () => {
  const lostPosition = getRandomInt(0, progSize - 1);
  const start = getRandomInt(1, 5);
  const step = getRandomInt(1, maxStepRand);
  const progression = progressionGenerator(start, step, progSize);
  const correct = progression[lostPosition];
  const sequence = progression.map((el, index) => {
    if (index === 2) {
      return '..';
    }
    return el;
  });
  return { correct, question: `${sequence.join(' ')}` };
};

export default () => {
  core(gameGenerator, rules);
};
