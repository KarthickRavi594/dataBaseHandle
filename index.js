var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const port = process.env.PORT || 3456;
app.listen(port,err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Running in ",port);
    }
});
app.use(bodyParser.json());
// const mongodb = 'mongodb://Karthick:Karthick1@ds137596.mlab.com:37596/testsample';
// mongoose.connect(mongodb, function (err, db) {
//     if (!err) {
//         console.log('Connected to DB');
//     }
//     else {
//         console.log(' Failed to  Connect');
//     }
// });
app.get('/', (req, res) => {
    res.send({ "statusCode": 200, "Message": "Success" });
})