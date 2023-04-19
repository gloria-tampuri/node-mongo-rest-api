import { Router } from "express";
import { getProductController, getProductsController, postNewProduct } from "../controller/productsController.js";

const router =Router()

router.get('/products', getProductsController)
router.get('/products/:productId', getProductController)
router.post('/products',postNewProduct )

export default router