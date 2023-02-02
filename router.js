import { Router } from "express";
const router = Router();


import  indexRouter   from "./routes/index.js";
import  usersRouter   from "./routes/user.js";
import  authRouter  from "./routes/auth.js";

// rusers
router.use("/", indexRouter);
router.use("/users", usersRouter);

// auth
router.use("/auth", authRouter);

export default router;
