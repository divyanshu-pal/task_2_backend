import express from 'express';


import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'
import cors from 'cors'
/**[ Middlewares ]**/
import errorHandler from './middleware/errorHandler.js';
import appMiddleware from './middleware/app.middleware.js';

import router from './routes/order.routes.js';
dotenv.config();
// const main = async () => {
  const port = process.env.PORT||4000;

  // try {
    const app = express();
    appMiddleware(app);
    /**[ Register Route ]**/
    app.use('/api',router)

    await connectDB()
    app.use(errorHandler)   
    app.listen(port, () => {
      console.log(`listening:*${port}`);
    });

  // } catch (e) {}
// };

// main().catch((e) => console.error(e));
