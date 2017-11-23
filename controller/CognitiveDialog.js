var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/6c755680-1ae9-4533-b927-07e8394fbe40/url?iterationId=3d8741ee-fe35-49f8-8bf2-5b10e9ab0830',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': 'c318d58e642d4da0a94252bbbd87a76e'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag
    } else{
        console.log('Oops, please try again!');
    }
}