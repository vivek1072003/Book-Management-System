const express = require('express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();




//   const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




const ManageBook =require("../controller/ManageBook")
const ManageSaller  = require("../controller/Manage-Saller")
const MAnageCostomer  = require("../controller/Manage-Costomer")
const ManagePuschase = require("../controller/Purchase")
const router = express.Router();

//Manage Book Controller
// Routes
/**
 * @swagger
 * /AddBook:
 *  post:
 *    description: Use to request all AddBook
  
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/AddBook',ManageBook.AddBook)
router.get('/GetAllBook',ManageBook.GetBookList)
router.get('/GetBookByKey',ManageBook.SearchBook)
router.put("/UpdateBook/:ID",ManageBook.UpdateBook)
router.delete("/DeleteBook/:ID",ManageBook.DeleteBook);

//Manage Saller Controller
router.post("/AddSaller",ManageSaller.AddSaller)
router.get("/GetSalerList",ManageSaller.GetSalerList)
router.get('/GetSallerByKey',ManageSaller.SearchSaller)
router.put("/UpdateSaller/:ID",ManageSaller.UpdateSaller)
router.delete("/DeleteSaller/:ID",ManageSaller.DeleteSaller)
// Manage Customer Controller

/**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
router.post("/AddCustomer",MAnageCostomer.AddCustomer)
router.get("/GetCustomerList",MAnageCostomer.GetCustomerList)
router.get('/GetCustomerByKey',MAnageCostomer.SearchCustomer)
router.put("/UpdateCustomer/:ID",MAnageCostomer.UpdateCustomer)
router.delete("/DeleteCustomer/:ID",MAnageCostomer.DeleteCustomer)




//Manage Purchase Management
router.post("/PurchaseBook",ManagePuschase.PurchaseBook)
router.get("/GetPurchases",ManagePuschase.GetPurchases)
router.get("/GetSoldBook",ManagePuschase.GetSoldBook)

module.exports = router;