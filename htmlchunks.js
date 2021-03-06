var https = require('https');

function HTMLChunks(){

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log("Received the chunk. The length is: ", data.length);
      console.log(data + "\n");
    });

    response.on('end', function(){
      console.log('Response stream complete');
    });

  });

}

HTMLChunks();