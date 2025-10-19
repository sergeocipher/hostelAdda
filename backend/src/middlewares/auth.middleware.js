// protect function async 
// authheader token extraction 
// decoded 
// try  findbyId 
// !user 404 usernot found 
// req.user = user 
// next()
// console.err(err)
//  500 server error 

import verifyToken from "../config/token.js";
import User from "../models/user.model.js";

const protect = async (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.stratsWith("Bearer ")){
        return res.status(401).json({message:"   No token provided!!!!!!"})
    }
    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);
    if (!decoded){
        return res.status(401).json({message:"Invalid token or token has expired baby !!!"})
    }
    try{
        const user = User.findById(decoded.id);
        if (!user){
            res.status(404).json({message:"User not found darling !!!"})
        }
        req.user = user;
        next()
    }catch(err){
        console.error(err);
        res.status(500).json({message:"server error darling !!!"})
    }
}
export default protect; 