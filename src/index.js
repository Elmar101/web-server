var express = require('express');

var app = express();

app.get('/', function(req , res){
 res.send("REST API")
})

app.listen(3300 , function(){
    console.log("Server Run ...");
})