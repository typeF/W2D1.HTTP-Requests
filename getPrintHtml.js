var https = require("https");

function getAndPrintHTML(){

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      // console.log("Received the chunk. The length is: ", data.length);
      // console.log(data);
      var appendedData = data.split();
      // appendedData.push(data);
      for (chunks in appendedData){
        console.log(appendedData[chunks]);
      }
    });

    response.on('end', function(){
      // console.log('Response stream complete');
    })

  });

  // return console.log(appendedData.toString());

}

getAndPrintHTML();