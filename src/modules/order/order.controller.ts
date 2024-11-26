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
    res.status(500).json({
      message: 'Failed to add order',
      success: false,
      error: error || 'Unknown Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
};

const revenueFromOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.revenueAggregationFromDB();
    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {totalRevenue: totalRevenue},
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to add order',
      success: false,
      error: error || 'Unknown Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
};

export const OrderController = {
  addOrder,
  revenueFromOrder,
};
