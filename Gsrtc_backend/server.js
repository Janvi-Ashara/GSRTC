// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');

const app=express();
app.use(cors());
app.use(express.json());

// import router from "./routes/bus.routes";
const router = require('./routes/bus.routes')

mongoose.connect('mongodb+srv://janvi@cluster0.ugkdu.mongodb.net/gsrtc',
    {
        useNewUrlParser : true,
        useUnifiedTopology:true
    });

app.use('/api',router)

app.get('/getData',(req,res)=>{
    res.send("welcome navaratri")
})
app.listen(5000,()=>{
    console.log("server started");
    
})
