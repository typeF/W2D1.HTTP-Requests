var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var arr = [];
  arr.push(html.toUpperCase());
  console.log(arr.join());
}

getHTML(requestOptions, printUpperCase);