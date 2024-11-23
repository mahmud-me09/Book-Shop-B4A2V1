import mongoose from 'mongoose';

import app from './app';
import config from './app/config';


async function bootstrap() {
  try {
    await mongoose.connect(config.databaseURL as string);

    app.listen(config.port, () => {
      console.log(`This app is running on ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
