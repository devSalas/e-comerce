import { Router } from "express";
import controllerProduct from "../controllers/controller-products.js";
import jwtVerify from "../middleware/jwtVerifiy.js";
import roleVerify from "../middleware/roleVerify.js";
import createProductsValidate from "../dto/dto-product.js";
import controllerCreateProduct from "../controllers/controller-create-products.js";
import controllerProductID from "../controllers/controller-products-id.js";

const routerproduct = new Router();

routerproduct.get('/product',controllerProduct)//todos los productos// querys:category, page
routerproduct.get('/product/:id',controllerProductID)//productos por id
routerproduct.post('/create-product',jwtVerify,roleVerify,createProductsValidate,controllerCreateProduct)//ruta para crear un producto nuevo


export default routerproduct;