import { Router } from "express";
import phonesRouter from "./phonesRouter";
import rechargesRouter from "./rechargesRouter";

const router = Router();

router.use(phonesRouter);
router.use(rechargesRouter);

export default router;
