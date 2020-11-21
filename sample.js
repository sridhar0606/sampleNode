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

app.post("/login",function(req,res) {

     let query = { 'email': request.body.email, 'password':request.body.password };

    db.findOne(query).exec(function (errors, data) {

        if(data) {

            response.json({status:'success',data:data,message:'Login successfully!'})

        } else {
            response.json({status:'failure',message:'Invaild Credentials',data:null});
        }

    });
    
})

app.post("/signup",function(req,res){

    
    var userDB =  new db(req.body);
            
            userDB.save(function (err, data) {

                if(data){
                    res.json({status:'success',data:null,message:'User signup successfully!'})

                } else {
                    res.json({status:'failure',data:null,message:'Something went wrong!'})
                }

            })

})
app.listen(8088, function () {



    console.log('===========================================================');

    console.log('Sever running on the port :' + 8088)

    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


})