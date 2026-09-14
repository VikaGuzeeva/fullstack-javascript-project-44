import getRandomNum from '../getRandomNum.js';

const getGcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

export { description, generateRound };