import express from "express";
import csvRouter from "../routes/uploadCsv"

const router = express.Router();

router.use('/data',csvRouter)


export default router;