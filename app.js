const express = require("express");
//const router = express.Router();

const app=express();


app.get('/', function(req, res){
  console.log(`A GET request for ${req.url}`);
  res.send("This address is not accessible to every person on the earth.");
});

app.get('/api', function(req, res){
  console.log(`A GET request for ${req.url}`);
  res.send({'message':'This is api.'});
});



app.listen(4000, function(){
    console.log("Listening on port 4000");
});
