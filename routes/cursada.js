import { Router } from "express";
const router = Router();
import CursadaController from "../controllers/CursadaController.js"

//ver todas cursadas
router.get("/",CursadaController.getAll);
//registrar cursada
router.post("/registercurso",CursadaController.register);
//seleccionar cursada
router.get("/id/:id",CursadaController.getById);
//buscar mis cursadas creadas
router.get("/miscursos/:email",CursadaController.getByEmail);
//borrar mis cursadas
router.delete("/delete/:id",CursadaController.deleteById);
//
router.post("/update/:id",CursadaController.updateById);
//buscar cursada por titulo
router.get("/search/:title",CursadaController.searchByTitle);
//compra de cursada
router.patch("/:id/order/:userId",CursadaController.buyById);
//ver todas las  compras de cursadas por id de ususario
router.get("/compradas/:userId",CursadaController.findBuyersById)
// comprobar cursada
router.get("/:id/comprobar/:userId",CursadaController.checkCursada)

export default router;

