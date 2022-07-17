import express from "express";
import { purchaseItem } from "../controllers/purchase.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, purchaseItem);

export default router;
