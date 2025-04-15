import express from "express";
import { Request,Response } from "express";
import createClientClickHouse from "../clickhouseClient";
const router = express.Router();
function inferType(value: any): string {
    if (!value || value === "") return "String";
    if (!isNaN(Number(value))) return "Int32";
    return "String";
}  
router.post('/insert-to-clickHouse',async(req:Request,res:Response)=>{
        const {rows,host,port,database,jwtToken,headers,tableName} = req.body;

        console.log(rows)
        if(!rows || !Array.isArray(rows)){
            res.status(400).json({error:'Invalid or Missing data rows.'})
            return;
        }

        if (!headers || !Array.isArray(headers) || headers.length === 0) {
            res.status(400).json({ error: "Missing headers" });
            return;
          }
        
     
        
        //   if (!tableName) {
        //     return res.status(400).json({ error: "Missing table name" });
        //   }

        try{
            // 1. First Create a ClientHouse
            const client = await createClientClickHouse();

            // 2. Build a Create Table Statement
            const sampleRow = rows.find((row)=>row);
            
            // getting columns to be created.
            const columnSql = headers.map((header)=>{
                const sampleValue = sampleRow[header];
                const type = inferType(sampleValue)
                return `\`${header}\` ${type}`;
            }).join(", ")
            const createSql = `
            CREATE TABLE IF NOT EXISTS \`${tableName}\` (
            ${columnSql}
            
            )
            ENGINE = MergeTree()
            ORDER BY tuple()`;

            await client.command({ query: createSql });

            const insertStream = await client.insert({
                table:tableName,
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