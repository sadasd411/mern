const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
var faker = require('faker');
var User = require('./user');
var Company = require('./company');

app.get('/api/user/new', (request,response) =>{
    console.log(request.url);
    console.log(request.body);
    const fakeUser = new User();
    console.log(fakeUser);
    response.json(fakeUser);
});
app.get('/api/company/new', (request,response) =>{
    console.log(request.url);
    console.log(request.body);
    const fakeCompany = new Company();
    console.log(fakeCompany);
    response.json(fakeCompany);
})

app.get('/api/user/company', (request,response) =>{
    console.log(request.url);
    console.log(request.body);
    const fakeUser = new User();
    const fakeCompany = new Company();
    response.json({User:fakeUser, Company:fakeCompany});
})


app.listen(8000,() =>{
    console.log("You have successfully connected to 8000");
})