import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Request,Response } from "express";
import createClientClickHouse from "./clickhouseClient";
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

    const client = await createClientClickHouse();

    const resultSet = await client.query({
        query: 'SELECT * from xyz',
        format: 'JSONEachRow',
      })
      
    const rows = await resultSet.json() ;
    console.log(rows)

    res.json({msg:"Backend is UP!",rows});
    return;
})


app.listen(PORT,()=>{
    console.log("Server Started at PORT:",PORT);
});