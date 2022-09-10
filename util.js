function timeit(f, n) {
  const start = process.hrtime.bigint();
  for (var i = 0; i < n; i++) {
    f();
  }
  const end = process.hrtime.bigint();
  return parseInt(end - start);
}

module.exports = {
  timeit,
};
