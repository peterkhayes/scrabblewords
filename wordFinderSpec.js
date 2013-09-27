describe("wordFinder", function() {
  var w = makeWordFinder();
  var wordList;
  var letterList;
  var handSize;

  var generateHand = function (size, letterList) {
    var hand = [];
    for (var i = 0; i < size; i++) {
      var randomIndex = Math.floor(Math.random()*letterList.length);
      hand.push(letterList(randomIndex));
    }
    return hand;
  };


  it("should have a method called findWords", function() {
    expect(w.findWords).toEqual(jasmine.any(Function));
  });

  it("should find words in a simple list", function() {
     wordList = ["eat", "at", "ate", "tea", "tee", "ta"];
     letterList = ["e", "a", "t", "o", "n"];
     handSize = 7;

     var hand = generateHand(handSize);

     expect(w.findWords(hand, wordList).length).toBeGreaterThan(0);
  });

});