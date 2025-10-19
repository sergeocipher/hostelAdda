import jwt from "jsonwebtoken"

export const generateToken = (user)=>{
    return jwt.sign(
        {id: user._id , email: user.email , role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: "7D"}
    )
}

export const verifyToken = (token) =>{
    try{
        return jwt.verify(token , process.env.JWT_SECRET)
    }catch(err){
        return null;
        console.log(" something wong in verify_token !!!!! ")
    }
}