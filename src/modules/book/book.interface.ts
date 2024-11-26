type Category =
  | 'Fiction'
  | 'Science'
  | 'SelfDevelopment'
  | 'Poetry'
  | 'Religious';

interface TProduct {
  title: string;
  author: string;
  price: number; 
  category: Category;
  description: string; 
  quantity: number;
  inStock: boolean;
}

export default TProduct