import {mongoose , Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    } ,
    passwordHash:{
        type: String 
    },
    role:{
        type: String,
        enum:["USER" , "ADMIN"]
    },
    IsVerified:{
        type: Boolean,
        default: false 
    }


},{timestamps: true})

const User = mongoose.model("User" , userSchema)
export default User;
