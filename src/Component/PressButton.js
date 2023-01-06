import React from 'react'
import { useSelector,useDispatch } from "react-redux";



function PressButton(props) {
    const myStyle={
        height:"40px",
        width:"80px",
        margin:"1.5%",
        borderRadius:"20px",
        color:"#e66a6a",
        backgroundColor:"white",
        fontSize:"30px",
        boxShadow: "0.25em 0.25em 2em rgba(0, 0, 0, 0.35)",
    }

    const dispatch= useDispatch();

    const run = (e)=>{
        console.log(props)
        dispatch({
            type:"SET_ID",
            todo:0,
        })
    }
    
    console.log("kya bhai")
    return (
        <>
            <h3 style={myStyle} onClick={(value)=>{
                console.log(props)
                dispatch({
                    type:"SET_ID",
                    ID:props.id,
                })
            }} value={props.id} 
            onMouseOver={(e)=>{
                e.target.style.backgroundColor="#f5b0b0"
                e.target.style.color="white"
            }}
            onMouseLeave={(e)=>{
                e.target.style.backgroundColor="white"
                e.target.style.color="#e66a6a"
            }}
            >{props.id}</h3>
        </>
    )
}

export default PressButton