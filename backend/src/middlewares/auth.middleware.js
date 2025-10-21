// protect function async 
// authheader token extraction 
// decoded 
// try  findbyId 
// !user 404 usernot found 
// req.user = user 
// next()
// console.err(err)
//  500 server error 

import { verifyToken } from "../config/token.js";
import User from "../models/user.model.js";

const protect = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    // console.log("Auth Header:", req.headers.authorization);


    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"   No token provided!!!!!!"})
    }
    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);
    if (!decoded){
        return res.status(401).json({message:"Invalid token or token has expired baby !!!"})
    }
    try{
        const user = await User.findById(decoded.id);
        if (!user){
            return res.status(404).json({message:"User not found darling !!!"})
        }

        // attach the actual user document to the request
        req.user = user;
        return next();
    }catch(err){
        console.error(err);
        res.status(500).json({message:"server error darling !!!"})
    }
}
export default protect; 