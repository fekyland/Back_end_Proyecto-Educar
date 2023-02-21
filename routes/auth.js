import { Router } from "express";

var router = Router();
import AuthController from "../controllers/AuthController.js";


/* POST register login. */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.put("/updateuser",AuthController.updateUser)

export default router;

