// it will contain middleware , routes and express setup

import express from "express";
import cors from "cors";
import cookieParser from  "cookie-parser";

// from other files 
import authRouter from "./routes/auth.routes.js"
// import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import participationRouter from "./routes/participation.routes.js"



const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth" , authRouter)
// app.use("api/user" , userRouter) 
app.use("/api/posts", postRouter);
app.use("/api/participations", participationRouter);



app.get("/" , (req,res) =>{
   res.send("backend is working")
})
export default app;