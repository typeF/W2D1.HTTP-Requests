var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var arr = "";
  arr = html.replace(/er/g, "0r").replace(/you/g, "j00").replace(/a/g, "4").replace(/e/g, "3").replace(/l/g, "1").replace(/o/g, "0").replace(/s/g, "5").replace(/t/g, "7").replace(/ck/g, "x");
  console.log(arr);
}

getHTML(requestOptions, print1337);