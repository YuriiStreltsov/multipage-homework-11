import '../../styles.css';
import colors from './colors';
import randomIntegerFromInterval from './randomIntegerFromInterval';

const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

ref.btnStart.addEventListener('click', start);
ref.btnStop.addEventListener('click', stop);

let isActive = false;
let timeId = null;

function start() {
  if (isActive) {
    return;
  }
  timeId = setInterval(changeBodyBackgroundColor, 1000);
  isActive = true;
}

function stop() {
  clearInterval(timeId);
  isActive = false;
}

const changeBodyBackgroundColor = () => {
  ref.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};
