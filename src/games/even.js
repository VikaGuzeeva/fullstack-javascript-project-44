import getRandomNum from '../getRandomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export { description, generateRound };