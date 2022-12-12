const express = require('express');

var parseUrl = require('body-parser');
const app = express();


let encodeUrl = parseUrl.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.post('/register', encodeUrl, (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var userName = req.body.userName;
    var password = req.body.password;
});

app.listen(4000, ()=>{
    console.log("Server running on port 4000");
});