import {Router} from "express";
import {ProductController} from "../controllers/products.controller";

const router = Router()
const controller = new ProductController()
router.get("/", controller.getProduct)

export default router
