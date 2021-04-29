//Imports
const express = require('express')

//Configs
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS = [];
//Logic
app.get('/', (req,res) => {
    res.send("Hello World!");
});

app.get('/echo/:msg', (req, res) => {
    res.send(req.params.msg);
});

app.post('/echo', (req, res) => {
    res.send(req.body);
});

app.get('/users', (req, res) => {
    res.send(USERS);
});

app.post('/users', (req, res) => {
    let newUser = {
        name: req.body.name,
        age: req.body.age,
    };
    USERS.push(newUser);
    res.send("User has been added!");
});

//app.put or app.patch to update an existing user
app.put('/users', (req, res) => {
    let userToBeUpdated = USERS.find(user => user.name === req.body.name);
    userToBeUpdated = req.body;
    res.send("User has been updated");
});


//app.delete to delete an existing user
app.delete('/users', (req, res) => {
    USERS.pop(user => user.name === req.body.name);
    res.send('User has been deleted!');
});


//Listen
app.listen(port, () => {
    console.log('App is listening at: http://localhost:'+port)
});