const Student = require('../models/joke.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world!");
    },
    getAllJokes:(req,res) =>{
        Joke.find({})
        .then((allJokeArray) => {
            console.log(allJokeArray)
            res.json(allJokeArray)
        })
        .catch((err) => res.json(err));
    },
    
    createJoke: (req, res) => {
        console.log(req.body);
    
        Joke.create(req.body)
          .then((newJokeObj) => {
            console.log(newJokeObj);
            // res.json is the equivalent of a return from the function
            res.json(newJokeObj);
          })
          .catch((err) => {
            console.log("in joke create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            res.json( {
              theErrObject: err,
              message: "There was an error"
            } );
        });
    },
}