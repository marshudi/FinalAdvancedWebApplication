import React from "react";
import { useState } from "react";
import axios from "axios";



export default function Register(){

    const [id,setid]=useState("");
    const [name,setname]=useState("");
    const [country,setcountry]=useState("");
    const [gender,setgender]=useState("");
    const [response,setresponse]=useState("");


    const addReg=()=>{
        axios.post("http://localhost:3001/add",{
            id:id,
            name:name,
            country:country,
            gender:gender,
        })
        .then((res)=>{
            setresponse(res.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(

        <>
        
        <div className="container " style={{marginTop:"150px"}}>
            <h1 className="text-center">Register</h1>
            <h4>ID: <input className="form-control" onChange={(e)=>{setid(e.target.value)}}></input></h4>
            <h4>Name: <input className="form-control" onChange={(e)=>{setname(e.target.value)}}></input></h4>
            <h4>Country: <input className="form-control" onChange={(e)=>{setcountry(e.target.value)}}></input></h4>
            <h4>Gender: <input className="form-control" onChange={(e)=>{setgender(e.target.value)}}></input></h4>
            <br/><br/>
            <div className="text-center">
                <button className="btn btn-primary btn-lg " onClick={addReg}>Submit</button>
            </div>
            <br/><br/>
            <h5 className="text-center">{response}</h5>
        </div>
        
        </>
    );
}