import TProduct from '../book/book.interface';
import { ProductModel } from '../book/book.model';

const addProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductServices = {
  addProductIntoDB,
};
