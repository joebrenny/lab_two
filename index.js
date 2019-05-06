//const http = require ('http');
//const fs = require('fs');
//const data = require('./top_2018_movies.json');

//conecting to the json data
//'use strict';
    //let jsonData = require('./top_2018_movies.json');
//console.log(jsonData); 

var express = require('express');
var app = express();
var server = app.listen(3000,function(){
    console.log("We have started our server on port 3000");
    });
    //app.get('/',function(req,res){
       // res.send('Hello world');
    //});
//app.get('/', function (req, res) {
    //var name = "Joe";
    //res.send(`Hello World ${name}`)
 // })
   
  //app.listen(3000)



//create a function that list all the movies 

//Create a function that list the movies that grossed above 20 million and genre is action

//Create a function that list the movies that are rated 'PG-13' and number of tickets sold is between 0 and 5 million

//Create a function that sorts the moveis based on 'distibutor'