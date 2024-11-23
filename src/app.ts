import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './modules/book/book.route';
import { OrderRoutes } from './modules/order/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes)
app.use("/api/orders", OrderRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
