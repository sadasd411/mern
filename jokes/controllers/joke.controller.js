const Joke = require('../models/joke.model');

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
    getJokeById:(req,res) =>{
      Joke.findById({_id:req.params.id})
      .then((jokeById) => {
          console.log(req._id)
          res.json(jokeById)
      })
      .catch((err) => res.json(err));
  },
  updateJokeById:(req,res) =>{
      Joke.updateOne(req.params.id,req.body,{new:true})
      .then((jokeById) => {
          console.log(req.params.id)
          res.json(jokeById)
      })
      .catch((err) => res.json(err));
  },
  deleteJokeById:(req,res) =>{
    Joke.findByIdAndRemove(req.params.id)
    .then((jokeById) => {
        console.log(req.params.id)
        res.json(jokeById)
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