import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://Bala:ramya25@ecommercecluster.qeqzo.mongodb.net/food_delivery').then(()=>console.log("DB connected"));
}

