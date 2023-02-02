import { Router } from "express";
const router = Router();

import  UserController from "../controllers/UserController.js";
import  isSuperAdmin from "../middlewares/isSuperAdmin.js";
import  verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
//router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
//router.get("/:id", verifyToken, isSuperAdmin, UserController.getById);

router.get("/:id",UserController.getById);
router.get("/",UserController.getAll);

//router.patch("/:userId/rent/:movieId",UserController.rentUserMovies);
//router.delete("/delete/:id",UserController.deleteById);

export default router;