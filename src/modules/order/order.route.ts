import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();

router.post('/add-order', OrderController.addOrder);

export const OrderRoutes = router;
