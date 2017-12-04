var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var arr = "";
  arr = (html.split("").reverse().join(""));
  console.log(arr);
}

getHTML(requestOptions, printReverse);