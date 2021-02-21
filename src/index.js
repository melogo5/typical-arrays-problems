
exports.min = function min (array) {
  if (!array) return 0;
  if (!array.length) return 0;
  let minValue = array[0];
  array.map(function(elem) {
    if(elem < minValue) minValue = elem;
  });
  return minValue;
}

exports.max = function max (array) {
  if (!array) return 0;
  if (!array.length) return 0;
  let maxValue = array[0];
  array.map(function(elem) {
    if(elem > maxValue) maxValue = elem;
  });
  return maxValue;
}

exports.avg = function avg (array) {
  if (!array) return 0;
  if (!array.length) return 0;
  let sum = 0;
  array.map(function(elem) {sum += elem})
  return sum / array.length;
}
