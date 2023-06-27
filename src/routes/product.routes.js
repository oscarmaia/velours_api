import { Router } from "express";
import {
  addProduct,
  getProducts,
  updateProducts,
  deleteProduct
} from "../controllers/product.controllers.js";
import productValidate from "../middlewares/product.schema.validade.js";
const router = Router();

router.post("/products", productValidate, addProduct);
router.get("/products", getProducts);
router.put("/products/:id", productValidate, updateProducts);
router.delete("/products/:id", deleteProduct);
export default router;
