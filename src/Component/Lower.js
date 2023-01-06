import React from 'react'
import PressButton from './PressButton'
import { useSelector,useDispatch } from "react-redux";

function Upper() {


    const myStyle={
        backgroundColor:"#F06966 – #FAD6A6",
        margin:"5%",
        
        // height:"250px",
        width:"90%",  
        position:"absolute", 
        display:"flex",
        flexDirection:"row",
        borderRadius:"10px",
        // overflowWrap:"break-word",
        flexWrap:"wrap",
    }

    const myState =  useSelector((state)=>   state.totalData);
    console.log(myState)
  return (
    <>
        <div style={myStyle}>
            
            {myState.map((element,index)=>{
                console.log(element.id);
                return <PressButton id={element.id}/>
                // <PressButton />
            })}
        </div>
        
    </>
  )
}

export default Upper