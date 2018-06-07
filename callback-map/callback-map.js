var words = ["ground", "control", "to", "major", "tom"];

function myMap(array, callback_function) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var word = callback_function(array[i]);
    result.push(word);
  }
  console.log(result);

}

myMap(words, function(word) {
  return word.length;
});

myMap(words, function(word) {
  return word.toUpperCase();
});

myMap(words, function(word) {
  return word.split('').reverse().join('');
});