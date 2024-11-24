import { CallbackError, Schema, model } from 'mongoose';
import { ProductModel } from '../book/book.model';
import TOrder from './order.interface';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value), // Basic email validation
        message: 'Invalid email address',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true, // Foreign key to Product model
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'], // Ensure quantity is greater than 0
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price must be a positive value'],
    },
  },
  { timestamps: true },
);

OrderSchema.pre('save', async function (next) {
  try {
    if (this.isNew) {
      const product = await ProductModel.findById(this.product);
      if (product) {
        // Calculate totalPrice
        this.totalPrice = product.price * this.quantity;
      } else {
        // Product not found error
        const error = new Error('Product not found');
        return next(error as CallbackError); // Type assertion here
      }
    }
    next();
  } catch (error: unknown) {
    next(error as CallbackError); // Type assertion for error passed to next
  }
});

export const OrderModel = model<TOrder>('Order', OrderSchema);
