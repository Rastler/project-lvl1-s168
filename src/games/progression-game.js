import { core, getRandomInt } from '..';

const size = 10;
const maxStepRand = 5;
const rules = 'What number is missing in this progression?';

const progression = (start, step, lost) => {
  const sequence = [];
  const iter = (index) => {
    if (index > size - 1) {
      return sequence;
    }
    if (lost === index) {
      return iter(sequence.push('..'));
    }
    return iter(sequence.push(start + (step * index)));
  };
  return iter(0);
};

const game = () => {
  const lost = getRandomInt(0, size - 1);
  const start = getRandomInt(1, 5);
  const step = getRandomInt(1, maxStepRand);
  const sequence = progression(start, step, lost);
  const correct = String(start + (step * lost));
  const conditions = `${sequence.join(' ')}`;
  return { correct, conditions };
};

export default () => {
  core(game, rules);
};
