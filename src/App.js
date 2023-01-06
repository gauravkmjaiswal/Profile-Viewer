import React ,{useEffect}from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import MainPage from "./Component/MainPage";

const App = () => {
  const myState =  useSelector((state)=>   state.totalData);
  console.log("welcome =>",myState)
  const dispatch=useDispatch();

let  incHandler= async  ()=>{
    console.log("hey")

      let raw
      let json
      let i=1
      let Darray=[]
      do{
        raw = await fetch(`https://reqres.in/api/users?page=${i}`)
        json = await raw.json()
        Darray=Darray.concat(json.data)
        i++
      }
      while(json.data.length===6)
      console.log(Darray)
      dispatch({
        type:"SET_TASKS",
        todo:Darray,
      })
  }
  useEffect(()=>{
    incHandler()
  },[])

  return (
    <>
      <MainPage/>
    </>
  );
};

export default App;
