
// Each Implementation with callbacks
function each(list, callback) {
    // Call the callback
    callback(list);
}

function display(list) {
    // I'm the callback
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
}

// Reduce Implementation
function reduce(list, reducer, accumulator){
  console.log("accumulator in reduce => ", accumulator);
  return reducer(list, accumulator);;
}

function reducer(list, accumulator){
  for (var i = 0; i < list.length; i++) {
    accumulator += list[i];
  }
  return accumulator;
}

const list = [1,2,3];
each(list, display);

const number = [1,2,3];
const sum = reduce(number, reducer, 0);
console.log("Sum => ", sum);
