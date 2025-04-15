import express from "express";
import csvRouter from "../routes/uploadCsv"
import insertDataToClickhouse from "../routes/insertDataToClickhouse"
const router = express.Router();

router.use('/data',csvRouter)
router.use('/send',insertDataToClickhouse);

export default router;