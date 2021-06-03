const target = document.getElementById('target');
const toggle = () => {
  target.classList.toggle('on');
}

let timer = null;
const timerOn = () => {
  timer = setTimeout(() => {
    toggle();
    timerOn();
  }, 1000);
}
const start = () => {
  if (timer === null) {
    timerOn();
  }
}

const stop = () => {
  clearTimeout(timer);
  timer = null;
}