import { Router } from "express";

var router = Router();
import AuthController from "../controllers/AuthController.js";
import verifyToken from "../middlewares/verifyToken.js";


/* POST register login. */
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.put("/updateuser", verifyToken, AuthController.updateUser)

export default router;

