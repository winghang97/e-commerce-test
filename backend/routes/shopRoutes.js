import express from "express";
import { getShops, getAllProducts } from "../controllers/shopController.js";

const router = express.Router();

router.get("/", getShops);
router.get("/:name", getAllProducts);

export default router;
