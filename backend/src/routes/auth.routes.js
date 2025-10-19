import express from "express";
import {signUp , login} from "../controllers/auth.controller.js"
const router = express.Router()

router.get("/" , (req,res)=>{
    res.send("  Auth is working fine darling !!!!!! ")
    console.log("auth is working fine !!!")
})
router.post("/signup", signUp);
router.post("/login", login);

export default router 