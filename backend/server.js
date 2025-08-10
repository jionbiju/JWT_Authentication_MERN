import express, { request } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.listen(3000, () => {
    console.log("Listening to the port 3000")
})
