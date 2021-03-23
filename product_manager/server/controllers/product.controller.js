const Product = require('../models/productManager.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world Devi!");
    },
    getAllProducts:(req,res) =>{
        Product.find({})
        .then((allProductArray) => {
            console.log(allProductArray)
            res.json(allProductArray)
        })
        .catch((err) => res.json(err));
    },
    
    getDetails:(req,res) =>{
      Product.findById({_id:req.params.id})
        .then((details) => {
            console.log(details)
            res.json(details)
        })
        .catch((err) => res.json(err));
    },
  
    createProduct: (req, res) => {
        console.log(req.body);
    
        Product.create(req.body)
          .then((newProductObj) => {
            console.log(newProductObj);
            // res.json is the equivalent of a return from the function
            res.json(newProductObj);
          })
          .catch((err) => {
            console.log("in Product create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            res.json( {
              theErrObject: err,
              message: "There was an error"
            } );
        });
    },
}