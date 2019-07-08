const express = require('express');
const mysql      = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'student',
});

db.connect(function(err){
    if (err) throw err
    console.log("My SQL is connected")
})


const app = express();

app.listen(5000);
console.log("Server is live on port 5000....");