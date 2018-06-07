// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr[i],i);   // execute callback
    }
  }
}

function actionWhenFound(name, pos) {
  console.log("Found " + name + ' at index ' + pos);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);