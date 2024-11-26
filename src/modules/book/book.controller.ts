import { Request, Response } from 'express';
import { ProductServices } from './book.service';

const errorMessage = (res: Response, error: any, message: string) =>
  res.status(500).json({
    message,
    success: false,
    error: error || 'Unknown Error',
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });

const getProduct = async (req: Request, res: Response) => {
  try {
    const { title, author, category } = req.query as {
      title?: string;
      author?: string;
      category?: string;
    };

    const query: any = {};
    if (title) query.title = { $regex: new RegExp(title, 'i') };
    if (author) query.author = { $regex: new RegExp(author, 'i') };
    if (category) query.category = { $regex: new RegExp(category, 'i') };

    const result = await ProductServices.getProductFromDB(query);
    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    errorMessage(res, error, 'Failed to retrieve books');
  }
};

const getAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getAProductFromDB(productId);
    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    errorMessage(res, error, 'Failed to retrieve the book');
  }
};

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
    errorMessage(res, error, 'Failed to add book');
  }
};

const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateAProductOnDB(
      productId,
      updateData,
    );
    res.status(200).json({
      message: 'Books Updated successfully',
      status: true,
      data: result.data,
    });
  } catch (error: any) {
    errorMessage(res, error, 'Failed to update the book');
  }
};

const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteAProductFromDB(productId);

    res.status(200).json({
      message: 'Books deleted successfully',
      status: true,
      data: {},
    });
  } catch (error: any) {
    errorMessage(res, error, 'Failed to delete book');
  }
};

export const BookController = {
  addProduct,
  getProduct,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};
