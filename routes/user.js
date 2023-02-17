import { Router } from "express";
const router = Router();

import  UserController from "../controllers/UserController.js";
import  isSuperAdmin from "../middlewares/isSuperAdmin.js";
import  verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
//router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
//router.get("/:id", verifyToken, isSuperAdmin, UserController.getById);

//CRUD USERS
// buscar ususario por id
router.get("/:id",UserController.getById);
//obtener todos los usuarios
router.get("/",UserController.getAll);
//router.update("/update/:id",UserController.updateById)
//borrar usuarios
router.delete("/delete/:id",UserController.deleteById);

//router.patch("/:userId/rent/:cursoId",UserController.BuyUserCursos);
//router.post("/update/:id",UserController.updateById);
//buscar todas las cursadas
router.get("/email/:email",UserController.getByEmail)

export default router;