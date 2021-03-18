const express = require('express');

const app = express();
;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config');

require('./routes/joke.route')(app);



app.listen(8000,() => {
    console.log("Your port is running");
});