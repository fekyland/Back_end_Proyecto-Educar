import { Router } from "express";
const router = Router();


import  indexRouter   from "./routes/index.js";
import  usersRouter   from "./routes/user.js";
import  authRouter  from "./routes/auth.js";
import cursadasRouter from "./routes/cursada.js"

// rusers
router.use("/", indexRouter);
router.use("/users", usersRouter);
//route cursos
router.use("/cursadas",cursadasRouter);
// auth
router.use("/auth", authRouter);

export default router;
