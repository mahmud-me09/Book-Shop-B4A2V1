import { Schema, model } from 'mongoose';
import TOrder from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: 'Invalid email address',
      },
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive value'],
    },
  },
  { timestamps: true },
);

export const OrderModel = model<TOrder>('Order', OrderSchema);