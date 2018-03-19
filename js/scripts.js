var sentence = prompt("Enter your sentence here");

var firstCapitalize = function(sent) {
  return sent.charAt(0).toUpperCase();
};

var lastCapitalize = function(sent) {
  return sent.slice(-1).toUpperCase();
};

var middleLetter = function(sentenceLength) {
  return sentenceLength.charAt(sentenceLength.length / 2);
};

var reverse = function(sentence) {
  var something = middleLetter(sentence) + sentence + firstCapitalize(sentence) + lastCapitalize(sentence);
  return something;
};


alert(reverse(sentence));
