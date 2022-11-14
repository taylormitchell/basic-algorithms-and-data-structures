function timeit(f, n) {
  const start = process.hrtime.bigint();
  for (var i = 0; i < n; i++) {
    f();
  }
  const end = process.hrtime.bigint();
  return parseInt(end - start);
}

function randomInt(min = 0, max = 100) {
  const range = max - min;
  return Math.floor(Math.random() * range) + min;
}

function randomIntArray(size = 10, min = 0, max = 100) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(randomInt(min, max));
  }
  return arr;
}

module.exports = {
  timeit,
  randomInt,
  randomIntArray,
};
