import getRandomNum from '../getRandomNum.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNum();
  const step = getRandomNum(); 
  const lengthOfProgression = 10;
  const hiddenIndex = getRandomNum(0, lengthOfProgression - 1); 
  const progression = generateProgression(start, step, lengthOfProgression);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenNumber);
  return [question, answer];
};

export { description, generateRound };