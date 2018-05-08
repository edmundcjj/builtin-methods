
// Each Implementation with callbacks
function each(list, callback) {
    // Call the callback
    callback(list);

    function callback(list) {
        // I'm the callback
        for (var i = 0; i < list.length; i++) {
          console.log(list[i]);
        }
    }
}

// Reduce Implementation
function reduce(list, reducer, accumulator){
  reducer(list, accumulator);

  function reducer(list){
    for (var i = 0; i < list.length; i++) {
      accumulator += list[i];
    }
    return accumulator;
  }
  return accumulator;
}

const list = [1,2,3];
each(list, function() { });

const number = [1,2,3];
const sum = reduce(number, function() { }, 0);
console.log("Sum => ", sum);
