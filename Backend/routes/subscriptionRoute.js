import express from "express";
import { handleSubscription } from "../controllers/subscriptionController.js";

const router = express.Router();

router.post("/", handleSubscription);

export default router;
