import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Display(){


    const [list,setlist]=useState([]);
    const [count,setcount]=useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3001/display")
        .then((res)=>{
            setlist(res.data.getReg);
            setcount(res.data.count);
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    return(
        <>
        <h3 style={{textAlign:"center", marginTop:"80px"}}>Available Rows: {count}</h3>
        <div className="container" style={{marginTop:"100px"}}>
            
            <table className="table table-striped table-boardered table-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((a)=>{
                    return(
                        <>
                    <tr>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.country}</td>
                        <td>{a.gender}</td>
                    </tr>
                        
                        </>
                    )
                })}

                </tbody>

            </table>

        </div>
        
        
        </>
    );
}