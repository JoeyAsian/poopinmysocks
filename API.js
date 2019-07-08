// requires package and storing it in express variable
const express = require('express');
// calling express and strong its value in a variable
const app = express();

// routing any traphic going to the root url and sending it back to a landing page.
app.get('/', function(request, response){
    response.send("Landing page!")
});
// rerouting any traphic thats going to /spooky and sending back a response.
app.get('/spooky', function(req, res){
    res.send("you are in my spooky page")    
});

// our application is listening for request on port:3000
app.listen(3000);

// letting us know that our server is up. if it didnt pop up it lets you know your server is not running
console.log("Server is live on port 3000....");