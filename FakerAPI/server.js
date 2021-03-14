const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// var faker = require('faker');
// var users = require('./user.js');
// var company = require('./company.js');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card
app.get('/api/', (request,response) =>{
    console.log(request.url);
    console.log(request.body);
    response.json([
        {
        Name: randomName,
        Email: randomEmail,
        Card: randomCard
    },
       
    ])
});
app.post('/api/', (request,response) =>{
    console.log(request.url);
    console.log(request.body);
    response.json({Welcome: "Hello devi"});
})


app.listen(8000,() =>{
    console.log("You have successfully connected to 8000");
})