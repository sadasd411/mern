const mongoose = require('mongoose');
// model - is the shape of the json data that we want to put in the collection
const ProductManagerSchema = new mongoose.Schema(
    
    {
        title: String,
        price: String,
        description: String,
    
       },
     {
            timestamps:true,
        }
);
const modelName = "ProductManager";
const  ProductManager = mongoose.model(modelName,ProductManagerSchema);
module.exports= ProductManager;