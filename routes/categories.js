import express from "express";
import { createCategory, deleteCategory, listCategories, listCategoriesDetail, updateCategory } from "../controllers/categories";
const router = express.Router();
router.get("/categories", listCategories);
router.get("/categories/:id", listCategoriesDetail);
router.post("/categories", createCategory);
router.delete("/categories/:id", deleteCategory);
router.put("/categories/:id", updateCategory);
export default router;