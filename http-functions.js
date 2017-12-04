// STEP 5  - Make it a Module

module.exports = function getHTML (options, callback){
  var https = require("https");
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
};

