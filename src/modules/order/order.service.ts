import TOrder from '../order/order.interface';
import { OrderModel } from '../order/order.model';

const addOrderIntoDB = async (product: TOrder) => {
  const result = await OrderModel.create(product);
  return result;
};

export const OrderServices = {
  addOrderIntoDB,
};
