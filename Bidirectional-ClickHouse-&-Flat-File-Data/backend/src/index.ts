import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());






app.listen(PORT,()=>{
    console.log("Server Started at PORT:",PORT);
})