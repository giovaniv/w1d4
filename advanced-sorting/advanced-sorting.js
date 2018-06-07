var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var names = students.sort( function(a,b) {
  var a = a.name;
  var b = b.name;
  return b < a;
} );

names.sort(function(a,b) {
  var a_name = a.name;
  var b_name = b.name;
  var a_age = a.age;
  var b_age = b.age;
  if (a_name === b_name) {
    return b_age - a_age;
  }
});

console.log(names);