var string = 'Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27';

// exports.wisdomCalculator = function(string) {

var breakDown = string.split(", ");

var getArray = [];
breakDown.forEach(function (littleStrings){
getArray.push(littleStrings.split(" is"));
})

var emptyArray = [];
getArray.forEach(function (nameAge){
  var ageObject = {
  name: nameAge[0],
  age: Number(nameAge[1])
}
emptyArray.push(ageObject)

})

// for (var i = 0; i < getArray.length; i++) {
//   var ageObject = {
//     name: getArray[i][0],
//     age: Number(getArray[i][1])
//   }
//   emptyArray.push(ageObject);
// }
var ageArray = [];

for (var i=1; i<emptyArray.length; i++){
  ageArray.push(emptyArray[i].age);
}

var eldest= Math.max.apply(null, ageArray);
var eldestName ='';
for (var i=0; i<emptyArray.length; i++) {

  if (emptyArray[i].age == eldest) {
    eldestName=emptyArray[i].name
  }
}
// return eldestName;
// }
console.log (eldestName);
