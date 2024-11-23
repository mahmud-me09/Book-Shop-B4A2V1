import { Types } from 'mongoose'; // For ObjectId type

interface TOrder {
  email: string; // The email address of the customer
  product: Types.ObjectId; // The book ordered (reference to a product ID in the database)
  quantity: number; // The quantity of the ordered book
  totalPrice: number; // The total price (product price * quantity)
}

export default TOrder;
