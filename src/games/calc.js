import getRandomNum from '../getRandomNum.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const generateRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

export { description, generateRound };