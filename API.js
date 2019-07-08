// requires package and storing it in express variable
const express = require('express');
// calling express and strong its value in a variable
const app = express();

// our application is listening for request on port:3000
app.listen(5000);

// letting us know that our server is up. if it didnt pop up it lets you know your server is not running
console.log("Server is live on port 5000....");