import { Request, Response } from 'express';
import { ProductServices } from './book.service';

const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.addProductIntoDB(newProduct);

    res.status(200).json({
      message: 'Book added successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to add book',
      success: false,
      error: error.message || 'Unknown Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
};

export const BookController = {
  addProduct,
};
