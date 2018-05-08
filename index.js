
function each(list, callback) {
    // ...

    // Call the callback
    callback(list);
}

function display(list) {
    // I'm the callback
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
}

let list = [1,2,3];
each(list, display);
