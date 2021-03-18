const mongoose = require('mongoose');
// model - is the shape of the json data that we want to put in the collection
const StudentSchema = new mongoose.Schema(
    
    {
        
        name: String,
    home_state: String,
    lucky_number: Number, 
    birthday: {month: Number, day: Number, year: Number}
    },
     {
            timestamps:true,
        }
);
const modelName = "Student";
const  Student = mongoose.model(modelName,StudentSchema);
module.exports= Student;