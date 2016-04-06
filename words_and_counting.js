exports.numbers = function(exampleSentence) {
  var numbersArray = exampleSentence.match(/\d+/g);
  console.log(numbersArray)
  return numbersArray;
};

exports.shorter = function(exampleSentence, length) {
  var sentenceArray = exampleSentence.replace(/\d\s+/g, '').split(' ');
  var shortestWord = [];
  var words = [];

  for (var i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i].length <= length) {
      words.push(sentenceArray[i]);
    }

  }
  for (i = 0; i < words.length; i++) {
    if (shortestWord.indexOf(words[i]) == -1) {
      shortestWord.push(words[i]);
    }
  }

  return shortestWord;
};

exports.larger = function(numbersArray, largeNumber) {

  var largerNumbers = [];

  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] >= largeNumber) {
      largerNumbers.push(numbersArray[i]);
    }

  }
  console.log (largerNumbers);
  return largerNumbers;
};


exports.words = function(exampleSentence) {
  var wordArray = exampleSentence.split(" ");
  console.log(wordArray.length)
  return wordArray.length;
}

exports.numberCount = function(numbers) {
  var joinTime = numbers.join(" ")

  var numberArrayAgain = joinTime.split(" ");

  return numberArrayAgain.length;
}
