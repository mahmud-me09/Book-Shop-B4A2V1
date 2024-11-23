import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const addOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    const result = await OrderServices.addOrderIntoDB(newOrder);

    res.status(200).json({
      message: 'Order received successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to add order',
      success: false,
      error: error.message || 'Unknown Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
};

export const OrderController = {
  addOrder,
};
