const greet = (name) => {
  if (Array.isArray(name)) {
    return `Hello, ${name.join(', ')}.`
  } else if (name === null) {
    return `Hello, there.`;
  } else if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  } else {
    return `Hello, ${name}.`;
  }
}

module.exports = {greet};