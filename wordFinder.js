var makeWordFinder = function(hand, wordList) {
  return {
    wordHashTable: hashArray(wordList),
    handPermutations: getPermutations(hand),
    findWords: function() {
      var foundWords = [];
      for (var i = 0; i < this.handPermutations.length; i++) {
        var testWord = this.handPermutations[i];
        if (this.wordHashTable[testWord]) {
          foundWords.push(testWord);
        }
      }
      return _(foundWords).uniq();
    }
  };
};

var getPermutations = function (array) {
  var result = [];
  for (var i = 0; i < array.length; i ++) {
    var element = array[i];
    result.push([element]);

    var subPermutations = getPermutations(array.slice(0, i).concat(array.slice(i+1)));
    for (var j = 0; j < subPermutations.length; j++) {
      result.push([element].concat(subPermutations[j]));
    }
  }
  for (var k = 0; k < result.length; k++) {
      result[k] = result[k].join('');
  }
  return result;
};

var hashArray = function (list) {
  var wordHashTable = {};
  for (var i = 0, len = list.length; i < len; i++) {
    wordHashTable[list[i]] = true;
  }
  return wordHashTable;
}
