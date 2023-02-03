import { Router } from "express";
const router = Router();

import  UserController from "../controllers/UserController.js";
import  isSuperAdmin from "../middlewares/isSuperAdmin.js";
import  verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
//router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
//router.get("/:id", verifyToken, isSuperAdmin, UserController.getById);

//CRUD USERS
router.get("/:id",UserController.getById);
router.get("/",UserController.getAll);
//router.update("/update/:id",UserController.updateById)

router.delete("/delete/:id",UserController.deleteById);

router.patch("/:userId/rent/:cursoId",UserController.BuyUserCursos);
export default router;