const Student = require('../models/student.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world");
    },
    getAllStudents:(req,res) =>{
        Student.find({})
        .then((allStudentArray) => {
            console.log(allStudentArray)
            res.json(allStudentArray)
        })
        .catch((err) => res.json(err));
    },
    getLuckyStudent:(req, res) =>{
        Student.find({lucky_number:{$gt:3}})
        .then((luckyStudents) =>{
            console.log(luckyStudents)
            res.json(luckyStudents);
        })
        .catch((err)=> res.json(err) )
    },
    createStudent: (req, res) => {
        console.log(req.body);
    
        Student.create(req.body)
          .then((newStudentObj) => {
            console.log(newStudentObj);
            // res.json is the equivalent of a return from the function
            res.json(newStudentObj);
          })
          .catch((err) => {
            console.log("in student create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            res.json( {
              theErrObject: err,
              message: "There was an error"
            } );
        });
    },
}
          



