var https = require("https");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
};

function getHTML(options, callback){
  var appendedData = [];

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      var appendedData = data.split();
      for (chunks in appendedData){
        printHTML(appendedData[chunks]);
      }
    });

    response.on('end', function(){
    console.log('Response stream complete');
    })

  });

  // return callback(appendedData);
  // return console.log(appendedData);

}

function printHTML(html){
  console.log(html);
}

getHTML(requestOptions, printHTML);