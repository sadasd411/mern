const userController = require('../controllers/student.controller')

module.exports = (app) => {
    app.get("/",userController.helloworld);
    
    app.get("/api/students", userController.getAllStudents);

    app.get("/api/luckystudents", userController.getLuckyStudent);

    app.post("/api/students", userController.createStudent);
}
