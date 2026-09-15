import getRandomNum from '../getRandomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    if (number < 2) {
        return false;
    }
    let divider = 2;
    while (divider <= number / 2) {
        if (number % divider === 0) {
            return false;
        }
        divider += 1;
    }
    return true;
}

const generateRound = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export { description, generateRound };