import express from "express";
import {Request,Response} from "express"
import multer from "multer";
import fs from "fs";
import csvParser from "csv-parser";


const router = express.Router();

const upload = multer({dest:'uploads/'});

router.get('/dd',(req:Request,res:Response)=>{
    res.json({msg:"hiiiii"});
    return;
})


router.post('/upload-csv',upload.single('file'),async(req:Request,res:Response)=>{
    const filePath = req.file?.path;
    const rows : any[] = [];
    if(!filePath){
        res.status(400).json({error:"No file Uploaded"})
        return;
    }

    // parsing the csv format..
    fs.createReadStream(filePath).pipe(csvParser()).on('data',(data)=>{rows.push(data)}).on('end',()=>{
        res.json({
            message:"CSV Uploded and Parsed!",
            rowCount:rows.length,
            preview:rows.slice(0,5),
            rows:rows
        })
    })

    return;

})

export default router;