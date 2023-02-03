import { Router } from "express";
const router = Router();
import CursadaController from "../controllers/CursadaController.js"


router.get("/",CursadaController.getAll);
router.post("/registercurso",CursadaController.register);
router.get("/:id",CursadaController.getById);
router.post("/miscursos",CursadaController.getByEmail);
router.delete("/delete/:id",CursadaController.deleteById);
export default router;

