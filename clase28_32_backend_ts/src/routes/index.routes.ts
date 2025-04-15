import { Router } from "express";
import { deleteCookie, getViews, readCookie, resetViews, setCookie } from "../controllers/index.controller";


const router = Router();

router.get("/visitas", getViews);
router.get("/reiniciar", resetViews);
router.get("/set-cookie", setCookie);
router.get("/read-cookie", readCookie);
router.get("/delete-cookie", deleteCookie);

export default router;