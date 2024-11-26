import express from "express"
import { BookController } from "./book.controller"
const router = express.Router()

router.post("/", BookController.addProduct)
router.get('/', BookController.getProduct)
router.get('/:productId', BookController.getAProduct)
router.put('/:productId', BookController.updateAProduct)
router.delete('/:productId', BookController.deleteAProduct)

export const ProductRoutes = router