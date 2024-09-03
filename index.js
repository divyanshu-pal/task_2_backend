import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'
import cors from 'cors'
/**[ Middlewares ]**/
import errorHandler from './middleware/errorHandler.js';
import appMiddleware from './middleware/app.middleware.js';
import router from './routes/order.routes.js';
const app = express();

app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies to be sent with requests (optional)
}));
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({extended:true}));
// const main = async () => {
  const port = process.env.PORT||4000;

  // try {
    
    // appMiddleware(app);
    /**[ Register Route ]**/
    app.use('/api',router)

      connectDB();
    // app.use(errorHandler)   
    app.listen(port, () => {
      console.log(`listening:*${port}`);
    });

  // } catch (e) {}
// };

// main().catch((e) => console.error(e));
