const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:result-calculated", (event) => {
    const amountOfNumbers = event.detail;
    this.displayResult(amountOfNumbers);
  });
};

ResultView.prototype.displayResult = function( result ) {
  const resultsElement = document.querySelector('#result');
  resultsElement.textContent = result;
};

module.exports = ResultView;
