  // The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  var pos = 0;

  arr.forEach(function(item) {
    if (item === "Waldo") {
      found(item,pos);   // execute callback
    }
    pos++;
  });

}

function actionWhenFound(name, pos) {
  console.log("Found " + name + ' at index ' + pos);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);