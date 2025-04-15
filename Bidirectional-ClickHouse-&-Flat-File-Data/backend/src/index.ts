import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Request,Response } from "express";
import createClientClickHouse from "./clickhouseClient";
import dotenv from 'dotenv'
dotenv.config();

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());



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