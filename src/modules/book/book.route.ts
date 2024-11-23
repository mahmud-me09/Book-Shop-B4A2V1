import express from "express"
import { BookController } from "./book.controller"
const router = express.Router()

router.post("/", BookController.addProduct)

export const ProductRoutes = router