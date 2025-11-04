import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('Enter your MongoDB path here').then(()=>console.log("DB Connected"))
}