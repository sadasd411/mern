const ProductManager = require('../models/productManager.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world Devi!");
    },
    getAllProducts:(req,res) =>{
        ProductManager.find({})
        .then((allProductArray) => {
            console.log(allProductArray)
            res.json(allProductArray)
        })
        .catch((err) => res.json(err));
    },
    
  
    createProductManager: (req, res) => {
        console.log(req.body);
    
        ProductManager.create(req.body)
          .then((newProductManagerObj) => {
            console.log(newProductManagerObj);
            // res.json is the equivalent of a return from the function
            res.json(newProductManagerObj);
          })
          .catch((err) => {
            console.log("in ProductManager create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            res.json( {
              theErrObject: err,
              message: "There was an error"
            } );
        });
    },
}