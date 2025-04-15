import express from "express";
import { Request,Response } from "express";
import createClientClickHouse from "../clickhouseClient";
const router = express.Router();

router.post('/insert-to-clickHouse',async(req:Request,res:Response)=>{
        const {rows,host,port,database,jwtToken} = req.body;
        console.log(rows)
        if(!rows || !Array.isArray(rows)){
            res.status(400).json({error:'Invalid or Missing data rows.'})
            return;
        }


        try{
            const client = await createClientClickHouse();
            const insertStream = await client.insert({
                table:'xyz',
                values:rows,
                format:'JSONEachRow'
            })

            await insertStream;
            res.json({message:'Data Inserted into Clickhouse!',rowCount:rows.length})



        }catch(error){
            console.error(error);
            res.status(500).json({error});
        }
    
    
    
    return;
})




export default router;