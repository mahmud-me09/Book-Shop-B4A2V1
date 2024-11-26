import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();

router.post('/', OrderController.addOrder);
router.get('/revenue', OrderController.revenueFromOrder);

export const OrderRoutes = router;
