let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
alert(text.match(/ain/));

//using search

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

alert(paragraph.search(regex));
// expected output: 43

alert(paragraph[paragraph.search(regex)]);
// expected output: "."

//Using toString method

var x = new String('Hello world');

alert(x.toString());