var https = require("https");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
};

function getAndPrintHTML(options){
  var appendedData = [];

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log("Received the chunk. The length is: ", data.length);
      // console.log(data);
      appendedData.push(data);
      console.log(appendedData);
    });

    response.on('end', function(){
      console.log('Response stream complete');
    })

  });

  return console.log(appendedData);

}

getAndPrintHTML(requestOptions);