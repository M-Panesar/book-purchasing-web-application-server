// const express = require('express');
// const colors = require('colors');
import express from 'express';
import colors from 'colors';
// import 'dotenv/config';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
import userModel from './models/userModel.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the app</h1>")
})


app.get("/create",async(req,res)=>{
    await userModel();
    res.send("Table created")
})

const PORT =  8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE}mode on port no. ${PORT}`.bgCyan.white);
});