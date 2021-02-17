function isValidArray (array) {
    if (typeof array === "undefined") return false;
    else if (array.length === 0) return false;
    else return true;
}

exports.min = function min (array) {
  if (!isValidArray(array)) return 0;
  let min = array[0]
  for (let index = 1; index < array.length; index++) {
      if (array[index] < min) min = array[index];
  }
  return min;
}

exports.max = function max (array) {
  if (!isValidArray(array)) return 0;
    let max = array[0]
    for (let index = 1; index < array.length; index++) {
        if (array[index] > max) max = array[index];
    }
    return max;
}

exports.avg = function avg (array) {
    if (!isValidArray(array)) return 0;
    let sum = 0;
    array.forEach( (item) => {sum += item;});
    return sum/array.length;
}
