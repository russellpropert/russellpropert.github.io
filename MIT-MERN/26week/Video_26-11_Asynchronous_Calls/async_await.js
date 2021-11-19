// will execute the same time a() will
const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('result');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling for result');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// these three will execute in sequence
const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('a');
    }, 2000);
  });
}

const b = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('b');
    }, 3000);
  });
}

const c = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('c');
    }, 1000);
  });
}

const list = [a, b, c];

(async function() {
  for (fn of list) {
    console.log(`calling ${fn.name}`);
    const result = await fn();
    console.log(result);
  }
})(); 