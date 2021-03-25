const productManagerController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get("/",productManagerController.helloworld);
    app.get("/api/allProducts", productManagerController.getAllProducts);
    app.get("/api/details/:id", productManagerController.getDetails);
    app.post("/api/createProduct", productManagerController.createProduct);
    app.put("/api/updateProduct/:id", productManagerController.updateProduct);
    app.delete("/api/deleteProduct/:id", productManagerController.deleteProduct);
}