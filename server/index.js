import mongoose from "mongoose";
import express  from "express";
import cors from "cors";

import regModel from "./Model/model.js";


const app=express();

app.use(express.json());
app.use(cors());

const connStr="mongodb+srv://Marshudi:admin@project.ludeoui.mongodb.net/mohDB"

mongoose.connect(connStr,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.listen(3001,()=>{
    console.log("Server Connected / PORT:3001")
})


app.post("/add", async(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const country=req.body.country;
    const gender=req.body.gender;

    const newReg= new regModel({
        id:id,
        name:name,
        country:country,
        gender:gender,
    })
    await newReg.save()
    res.send("Added Successfully....")
})


app.get("/display",async(req,res)=>{
    const getReg= await regModel.find({})
    .then(async(getReg)=>{
        const countReg=await regModel.countDocuments({})
        res.send({
            getReg,
            count:countReg
        })
    })
    .catch((error)=>{
        console.log(error)
    })
})