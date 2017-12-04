var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  var arr = [];
  arr.push(html.toLowerCase());
  console.log(arr.join());
}

getHTML(requestOptions, printLowerCase);