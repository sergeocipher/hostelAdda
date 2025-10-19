// it will lisen and run the app on port 8000  and connect to mongoDB 
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js"
import connectDB from "./config/connectDB.js"

connectDB().then(() =>{
    app.listen(process.env.PORT , ()=>{
    console.log("yo boy server running !!!!")
    })
})

