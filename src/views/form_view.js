const PubSub = require('../helpers/pub_sub.js')

const FormView = function(){

}

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputtedNumbers = event.target.number.value;

    PubSub.publish('FormView:numbers-submitted', inputtedNumbers);

    console.log("Inputted numbers:", inputtedNumbers);
  });
}

module.exports = FormView;
