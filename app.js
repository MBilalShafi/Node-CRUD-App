var express = require("express");

var app=express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.send("This is a text response");
  console.log(`Sent a text response to ${req.ip}`);
});


app.listen(3000);
console.log("Listening on port 3000");
