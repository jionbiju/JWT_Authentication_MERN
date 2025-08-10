import express, { request } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();
const MongoDBURI=process.env.MONGODB_URI;

//Parsing
app.use(express.json());
app.use(cookieParser());


//MongoDB Connection
mongoose.connect(MongoDBURI)
    .then(() => {
        console.log('Database connected successfully');
        app.listen(port,() => {
            console.log(`Server running on the port ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })
