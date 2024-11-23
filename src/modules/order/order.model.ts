import { Schema, model } from 'mongoose';
import TOrder from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Foreign key
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const OrderModel = model<TOrder>('Order', OrderSchema);