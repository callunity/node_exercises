var numbers = process.argv.slice(2).map(function(num) {
  return Number(num);
}).reduce(function(a, b) {
  return a + b;
});

console.log(numbers);