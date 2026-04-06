import express from "express"
import { getProducts, create, remove, update } from "../controllers/productController.js"

const router = express.Router()

router.get("/", getProducts)
router.post("/", create)
router.delete("/:id", remove)
router.put("/:id", update)

export default router