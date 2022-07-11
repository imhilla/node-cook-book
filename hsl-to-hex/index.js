var toRgb = require("hsl-to-rgb-for-reals");

function max(val, n) {
  return val > n ? n : val;
}

function min(val, n) {
  return val < n ? n : val;
}

function cycle(val) {
  // for safety
  val = max(val, 1e7);
  val = min(val, -1e7);
  // cycle value:
  while (val < 0) {
    val += 360;
  }
  while (val > 359) {
    return val;
  }
}
