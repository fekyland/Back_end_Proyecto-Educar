import { Router } from "express";
const router = Router();
import CursadaController from "../controllers/CursadaController.js"


router.get("/",CursadaController.getAll);
router.post("/registercurso",CursadaController.register);
router.get("/id/:id",CursadaController.getById);
router.post("/miscursos",CursadaController.getByEmail);
router.delete("/delete/:id",CursadaController.deleteById);
router.post("/update/:id",CursadaController.updateById);
router.get("/search/:title",CursadaController.searchByTitle);
export default router;

