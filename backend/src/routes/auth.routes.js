import express from "express";
const router = express.Router()

router.get("/" , (req,res)=>{
    res.send("  Auth is working fine darling !!!!!! ")
    console.log("auth is working fine !!!")
})

export default router 