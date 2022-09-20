import express from "express";
const router = express.Router();
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";


router.get("/products", listProduct);
router.get("/products/:id", listProductDetail);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);


export default router;