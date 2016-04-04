var string = 'Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27';

exports.wisdomCalculator = function(string) {

var breakDown = string.split(", ");
var getArray = [];
for (var i = 0; i < breakDown.length; i++) {
  getArray.push(breakDown[i].split(" is"));

}

var emptyArray = [];
for (var i = 0; i < getArray.length; i++) {
  var ageObject = {
    name: getArray[i][0],
    age: Number(getArray[i][1])
  }
  emptyArray.push(ageObject);
}
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
return eldestName;
}
