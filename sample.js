const express = require('express');

const app = express();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors'),
cookieParser = require('cookie-parser');

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var enableCORS = function (request, response, next) {
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Date, X-Date');
    return next();
};

app.use(enableCORS);
// var dbUri ='mongodb://localhost:27017/smartClass';

// var dbconnect = dbUri;
//mongoose.connect(dbconnect);
app.get("/test",function(req,res){

	res.json({title:"welcome"});
})

app.post("/login",function(req,res){

	res.json(req.body);
})
app.listen(8088, function () {



    console.log('===========================================================');

    console.log('Sever running on the port :' + 8088)

    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


})