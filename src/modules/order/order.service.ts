import TOrder from '../order/order.interface';
import { OrderModel } from '../order/order.model';

const addOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const revenueAggregationFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result;
};

export const OrderServices = {
  addOrderIntoDB,
  revenueAggregationFromDB,
};
