import { useSelector,useDispatch } from "react-redux";
import React ,{useEffect}from "react";

function Upper() {
    const myStyle={
        backgroundColor:"White",
        margin:"5%",
        height:"250px",
        width:"auto",   
        display:"flex",
        flexDirection:"Row",
        borderRadius:"1000px",
        // background:"linear-gradient(rgba(250,0,0,0.5),transparent)",
  
    }
    const imageStyle={
        height:"100%",
        // borderRadius:"50px "
    }
    const infoStyle={
        textAlign:"left",
        marginLeft:"20px",
    }
    const CurID =  useSelector((state)=>   state.changeId);
    const myState =  useSelector((state)=>   state.totalData);
    const pro = useSelector((state)=>   state.changeProfile)
    
    const dispatch=useDispatch();
    if(myState.length!=0)
    console.log(myState[3].avatar)
    
    let show =()=>{
        console.log(CurID)
    }

   

    let changeHandler = async ()=>{
        console.log("changed")
        if(myState.length!=0 && CurID!=-1)
        {
            let raw = await fetch(`https://reqres.in/api/users/${CurID+1}`)
            let json = await raw.json()
            json=json.data
        
            dispatch({
                type:'GET_ID',
                profile:{
                    image:json.avatar,
                    firstName:json.first_name,
                    lastName:json.last_name,
                    email:json.email,
                    id:json.id
                }
            })
        }
    }

useEffect(()=>{
    changeHandler()
},[CurID])

  return (
    <>
        <div style={myStyle}>
            <div style={imageStyle}><img src={pro.image} height={250} /></div>
            <div style={infoStyle}>
            <h1>Id : {pro.id}</h1>
            
            <h1 onClick={show}>First Name : {pro.firstName}</h1>
            <h1>Last Name : {pro.lastName}</h1>
            <h1>Email : {pro.email}</h1>
            </div>
        </div>
    </>
  )
}

export default Upper