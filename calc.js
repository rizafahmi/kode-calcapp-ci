const add = (a, b) => {
  if (isNaN(a) || isNaN(b)) return false;

  if (Number.isInteger(a) !== true || Number.isInteger(b) !== true)
    return parseFloat(a) + parseFloat(b);
  return parseInt(a) + parseInt(b);
};
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sqrt = (a) => a * a;
const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);

module.exports = {
  add,
  sub,
  mul,
  div,
  sqrt,
  sin,
  cos
};
