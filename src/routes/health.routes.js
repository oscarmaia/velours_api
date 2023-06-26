import { Router } from "express";
const router = Router();
import { Health } from "../controllers/health.controllers.js";

router.get("/health", Health);
export default router;
