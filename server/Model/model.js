import mongoose from "mongoose";

const regSchema= mongoose.Schema({
    id:{type:String,require:true},
    name:{type:String,require:true},
    country:{type:String,require:true},
    gender:{type:String,require:true},
})

const regModel= mongoose.model("reg_Model",regSchema)
export default regModel;