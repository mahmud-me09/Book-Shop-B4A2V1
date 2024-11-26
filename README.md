### The live link is: https://bookstore-api-nine.vercel.app

### For api Endpoints:
1. Get All: /products
2. Get as per Query: /products?title=title&category=category&author=author
3. Get, Update or delete a product: /products/productId


### How to setup the project locally:

1. Clone the repository.
2. create a environment variable file with the following keys:

DATABASE_URL=your MONGODB connection string
PORT=your free port.

3. run the following commands:

npm i
npm run build
npm run start:dev

4. For eslint access:

npm run lint
npm run lint:fix