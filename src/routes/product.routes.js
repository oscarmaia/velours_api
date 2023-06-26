import { Router } from "express";
import { addProduct } from "../controllers/product.controllers.js";
import productValidate from "../middlewares/product.schema.validade.js";
const router = Router();

router.post("/products", productValidate, addProduct);
export default router;
