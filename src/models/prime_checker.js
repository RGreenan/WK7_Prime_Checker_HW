const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function(){
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};


PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:numbers-submitted', (event) => {
    const inputtedNumbers = event.detail;
    const amountOfNumbers = this.countWords(inputtedNumbers);
    PubSub.publish("PrimeChecker:result-calculated", amountOfNumbers);
  });
};


PrimeChecker.prototype.countWords = function (text) {
  const amountOfNumbers = text.split(' ').length;
  return amountOfNumbers;
}


module.exports = PrimeChecker;
