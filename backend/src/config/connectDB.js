import mongoose from "mongoose";


const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGO_DB connected succesfully!!! ")
    }catch(err){
        console.log("MongoDB Failed connections !!!!!")
    }
} 

export default connectDB;