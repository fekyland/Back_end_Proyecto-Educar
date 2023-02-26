import { Router } from "express";
const router = Router();

import  UserController from "../controllers/UserController.js";
import  isSuperAdmin from "../middlewares/isSuperAdmin.js";
import  verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin,UserController.getAll);
// get user by id
router.get("/:id", verifyToken, isSuperAdmin, UserController.getById);
// delete user by id
router.delete("/delete/:id",UserController.deleteById);
//buscar todas las cursadas
router.get("/email/:email",verifyToken,UserController.getByEmail)


export default router;