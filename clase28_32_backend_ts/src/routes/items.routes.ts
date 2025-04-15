import { Router } from "express";
import { getAllItems, getItemById, createItem, updateItemById, deleteItemById, unsuscribeItemById } from "../controllers/items.controller";
import { validateItem } from "../middlewares/validateItem";
import { handleValidation } from "../middlewares/handleValidation";
import { logger } from "../middlewares/logger";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", verifyToken, getAllItems);
router.get("/baja-item/:id", unsuscribeItemById);
router.get("/:id", getItemById);
router.post("/", validateItem, handleValidation, createItem);
router.put("/:id", updateItemById);
router.delete("/:id", deleteItemById);

export default router;