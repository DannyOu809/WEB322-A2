const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("src"));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/home.html'));
});

app.get('/cwh',function(req,res){
  res.sendFile(path.join(__dirname, '/src/cwh.html'));
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname, '/src/login.html'));
});

app.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname, '/src/registration.html'));
});

const port = process.env.port || 8080;
app.listen(port);

console.log("Link for testing: http://localhost:8080");