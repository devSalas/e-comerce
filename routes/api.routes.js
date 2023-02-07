import { Router } from "express";
import controllerProduct from "../controllers/controller-products.js";
import jwtVerify from "../middleware/jwtVerifiy.js";
import roleVerify from "../middleware/roleVerify.js";
import createProductsValidate from "../dto/dto-product.js";
import controllerCreateProduct from "../controllers/controller-create-products.js";
import controllerProductID from "../controllers/controller-products-id.js";

const router = new Router();

router.get('/product/',controllerProduct)
router.get('/product/:id',controllerProductID)
router.post('/create-product',jwtVerify,roleVerify,createProductsValidate,controllerCreateProduct)


export default router;