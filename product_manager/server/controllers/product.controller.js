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
    updateProduct: (req, res) => {
      console.log(req.body);
      Product.findByIdAndUpdate(req.params.id,req.body)
        .then((updatedProduct) => {
          console.log(updatedProduct);
          // res.json is the equivalent of a return from the function
          res.json(updatedProduct);
        })
        .catch((err) => {
          console.log("in Product update");
          console.log(err);
          // res.json is the equivalent of a return from the function
          res.json( {
            theErrObject: err,
            message: "There was an error"
          } );
      });
  },
  deleteProduct: (req, res) => {
    console.log(req.body);
    Product.findByIdAndDelete(req.params.id)
      .then((deletedProduct) => {
        console.log(deletedProduct);
        // res.json is the equivalent of a return from the function
        res.json(deletedProduct);
      })
      .catch((err) => {
        console.log("in Product delete");
        console.log(err);
        // res.json is the equivalent of a return from the function
        res.json( {
          theErrObject: err,
          message: "There was an error"
        } );
    });
},
}