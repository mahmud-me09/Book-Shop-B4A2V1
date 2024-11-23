type Category =
  | 'Fiction'
  | 'Science'
  | 'SelfDevelopment'
  | 'Poetry'
  | 'Religious';

interface TProduct {
  title: string; // The title of the book
  author: string; // The author of the book
  price: number; // Price of the book
  category: Category; // The genre or category of the book
  description: string; // A brief description of the book
  quantity: number; // Quantity of the book available
  inStock: boolean; // Indicates if the book is in stock
}

export default TProduct