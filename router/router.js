import { Router } from "express";
import clientRouter from "./client/clientRouter.js";
import serverRouter from "./server/serverRouter.js";

const router = Router();

router.use('/',clientRouter);
router.use('/admin' , serverRouter);
export default router;