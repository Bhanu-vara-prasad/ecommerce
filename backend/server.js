import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/Cloudinary.js'
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//App config

const app=express();
const port=process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

app.use('/api/user',userRouter);
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

// app.use('/',(req,res)=>{
//     res.end('api working');
// })

app.listen(port,()=>{
    console.log('server started on Port : '+port);
})