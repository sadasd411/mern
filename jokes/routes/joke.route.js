const userController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.get("/",userController.helloworld);
    
    app.get("/api/jokes", jokeController.getAllJokes);
    app.put("/api/jokes", jokeController.createJoke);

  //  app.get("/api/jokes/:_id", userController.getSingleJoke);

    
}