// executes in parallel
const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('a');
    }, 5000);
  });
}

const b = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('b');
    }, 4000);
  });
}

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('c');
    }, 3000);
  });
}

const list = [a, b, c];

for (fn of list) {
  console.log(`Function: ${fn.name}`);
  fn().then((result) => {
    console.log(`Result: ${result}`);
  });
}