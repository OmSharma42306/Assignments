import express from "express";
import csvRouter from "../routes/uploadCsv"
import insertDataToClickhouse from "../routes/insertDataToClickhouse"

const router = express.Router();

router.use('/csv',csvRouter)
router.use('/clickHouse',insertDataToClickhouse);

export default router;