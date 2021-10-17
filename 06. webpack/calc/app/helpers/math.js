const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const equals = (a, b, cb) => {
  return cb(a, b);
};
module.exports = { add, sub, multiply, divide, equals };