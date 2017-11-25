import { core, getRandomInt } from '..';

const size = 10;
const maxStepRand = 5;
const rules = 'What number is missing in this progression?';

const progressionGenerator = (start, step, lost) => {
  let lostNumber;
  const sequence = [];
  const iter = (index) => {
    if (index > size - 1) {
      return { lostNumber, sequence };
    }
    if (lost === index) {
      lostNumber = start + (step * lost);
      return iter(sequence.push('..'));
    }
    return iter(sequence.push(start + (step * index)));
  };
  return iter(0);
};

const gameGenerator = () => {
  const lost = getRandomInt(0, size - 1);
  const start = getRandomInt(1, 5);
  const step = getRandomInt(1, maxStepRand);
  const progression = progressionGenerator(start, step, lost);
  const correct = String(progression.lostNumber);
  const sequence = progression.sequence.join(' ');
  const question = `${sequence}`;
  return { correct, question };
};

export default () => {
  core(gameGenerator, rules);
};
