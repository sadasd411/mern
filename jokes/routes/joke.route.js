const jokeController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.get("/",jokeController.helloworld);
    
    app.get("/api/jokes", jokeController.getAllJokes);
    app.post("/api/jokes", jokeController.createJoke);
    app.get("/api/jokes/:id",jokeController.getJokeById);
    app.put("/api/jokes/:id",jokeController.updateJokeById);
    app.delete("/api/jokes/:id",jokeController.deleteJokeById);
  //  app.get("/api/jokes/:_id", userController.getSingleJoke);

    
}