import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Request,Response } from "express";
import createClientClickHouse from "./createClientClickHouse";
import dotenv from 'dotenv'
import apiRouter from "./api/api";
dotenv.config();

const PORT = 3000;

const app = express();

// app.use(bodyParser.json());
// allow larger JSON bodies (e.g. up to 50 MB)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/api/v1",apiRouter);


app.get('/',async (req:Request,res:Response)=>{
    res.json({msg:"Backend is UP!"});
    return;
})


app.listen(PORT,()=>{
    console.log("Server Started at PORT:",PORT);
});