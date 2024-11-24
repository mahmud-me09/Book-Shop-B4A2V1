import { ObjectId } from 'mongodb';
import TProduct from '../book/book.interface';
import { ProductModel } from '../book/book.model';

const getProductFromDB = async (query:{title?:string ; author?:string; category?:string}) => {
  const result = await ProductModel.find(query);
  return result;
};

const getAProductFromDB = async (id:string) =>{
  const result = await ProductModel.findOne({_id: new ObjectId(id)});
  return result
}

const addProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const updateAProductOnDB = async (id: string, updateData:Object) => {
  const result = await ProductModel.updateOne({ _id: new ObjectId(id) },{$set:updateData});
  return result;
};

export const ProductServices = {
  addProductIntoDB,
  getProductFromDB,
  getAProductFromDB,
  updateAProductOnDB,
};
