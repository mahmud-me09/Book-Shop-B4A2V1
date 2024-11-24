import { Schema, model } from 'mongoose';
import validator from 'validator';
import TProduct  from './book.interface';

const ProductSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => {
          return validator.isLength(value, { min: 1, max: 255 });
        },
        message: 'Title must be between 1 and 255 characters',
      },
    },
    author: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => {
          return validator.isLength(value, { min: 1 });
        },
        message: 'Author is required',
      },
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => {
          // price is a positive number
          return value > 0;
        },
        message: 'Price must be a positive number',
      },
    },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => {
          return validator.isLength(value, { min: 5 });
        },
        message: 'Description is required',
      },
    },
    quantity: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => {
          // Quantity is a non-negative integer
          return Number.isInteger(value) && value >= 0;
        },
        message: 'Quantity must be a non-negative integer',
      },
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const ProductModel = model<TProduct>('Product', ProductSchema);
