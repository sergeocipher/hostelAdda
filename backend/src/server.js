// it will lisen and run the app on port 8000  and connect to mongoDB 
import dotenv from "dotenv";
// import http from "http"
dotenv.config();

import app from "./app.js"
import connectDB from "./config/connectDB.js"

connectDB().then(() =>{
    app.listen(process.env.PORT || 8000, ()=>{
    console.log("yo boy server running !!!!")
    })
})

