var display = '';
var argument1 = '';
var operator = '';

function addZero() {
  if (display.length > 0) {
    display = display.concat('0');
  }

  document.querySelector('div').innerHTML = display;
}

document.querySelector('.zero').addEventListener('click', addZero);

function addOne() {
  display = display.concat('1');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.one').addEventListener('click', addOne);

function addTwo() {
  display = display.concat('2');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.two').addEventListener('click', addTwo);

function addThree() {
  display = display.concat('3');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.three').addEventListener('click', addThree);

function addFour() {
  display = display.concat('4');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.four').addEventListener('click', addFour);

function addFive() {
  display = display.concat('5');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.five').addEventListener('click', addFive);

function addSix() {
  display = display.concat('6');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.six').addEventListener('click', addSix);

function addSeven() {
  display = display.concat('7');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.seven').addEventListener('click', addSeven);

function addEight() {
  display = display.concat('8');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.eight').addEventListener('click', addEight);

function addNine() {
  display = display.concat('9');
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.nine').addEventListener('click', addNine);

function reset() {
  display = '';
  operator = '';
  argument1 = '';
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.delete').addEventListener('click', reset);

function addDot() {
  if (display == '') {
    display = display.concat('0.');
  }
  else {
    display = display.concat('.');
  }
  
  document.querySelector('div').innerHTML = display;
}
document.querySelector('.dot').addEventListener('click', addDot);


function plus() {
  argument1 = display;
  display = '';
  operator = '+';
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.plus').addEventListener('click', plus);

function minus() {
  argument1 = display;
  display = '';
  operator = '-';
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.minus').addEventListener('click', minus);

function division() {
  argument1 = display;
  display = '';
  operator = '/';
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.division').addEventListener('click', division);

function times() {
  argument1 = display;
  display = '';
  operator = '*';
  document.querySelector('div').innerHTML = display;
}

document.querySelector('.times').addEventListener('click', times);


function calculate() {
  if (operator === undefined || operator === null) {
    reset;
  }
  if ('+' == operator) {

    display = (parseFloat(display) + parseFloat(argument1));

  }
  if ('-' == operator) {

    display = (parseFloat(argument1) - parseFloat(display));

  }
  if ('*' == operator) {

    display = (parseFloat(argument1) * parseFloat(display));

  }
  if ('/' == operator) {

    display = (parseFloat(argument1) / parseFloat(display));

  }
  //display = (parseFloat(display)).toFixed(10);
  document.querySelector('div').innerHTML = display;

}

document.querySelector('.equals').addEventListener('click', calculate);


