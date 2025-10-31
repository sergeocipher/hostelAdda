import User from "../models/user.model.js"



export const friendList = async (req,res) =>{
    try{
        const users = await User.find({ _id: { $ne: req.user.id } }, { passwordHash: 0 });
        res.status(201).json(users);
    }catch(error){
        res.status(500).json({message: "failed to fetch the user list darling !!!"})
    }
}

