const productManagerController = require('../controllers/productManager.controller')

module.exports = (app) => {
    app.get("/",productManagerController.helloworld);
    app.get("/api/allProducts", productManagerController.getAllProducts);
    app.post("/api/createProduct", productManagerController.createProductManager);
}