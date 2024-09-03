import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'
/**[ Middlewares ]**/
import errorHandler from './middleware/errorHandler.js';
import appMiddleware from './middleware/app.middleware.js';
import router from './routes/order.routes.js';
const app = express();




const main = async () => {
  dotenv.config();
  const port = process.env.PORT||4000;

  try {
    
     appMiddleware(app);
   
    app.use('/api',router)

    await connectDB()
    app.use(errorHandler);   
    app.listen(port, () => {
      console.log(`listening:*${port}`);
    });

  } catch (e) {}
};

main().catch((e) => console.error(e));
