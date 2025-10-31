import express from 'express';
import protect from "../middlewares/auth.middleware.js";
import { friendList } from '../controllers/friendList.controllers.js';

const router = express.Router();

router.get("/" , protect , friendList);

export default router;