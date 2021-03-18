const mongoose = require('mongoose');
// model - is the shape of the json data that we want to put in the collection
const JokeSchema = new mongoose.Schema(
    
    {
        
        setup: String,
    punchline: String,
       },
     {
            timestamps:true,
        }
);
const modelName = "Joke";
const  Joke = mongoose.model(modelName,JokeSchema);
module.exports= Joke;