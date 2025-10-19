import {express , router} from "express";
import protect from "../middlewares/auth.middleware.js";

router = express.Router()

router.get("/profile" ,protect, (req,res)=>{
    res.json({user: req.user})
})
export default router;