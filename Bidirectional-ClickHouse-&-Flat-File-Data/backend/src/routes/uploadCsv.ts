import express from "express";
import {Request,Response} from "express"

const router = express.Router();



router.get('/dd',(req:Request,res:Response)=>{
    res.json({msg:"hiiiii"});
    return;
})


export default router;