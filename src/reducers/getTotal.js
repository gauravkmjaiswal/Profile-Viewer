const initialState =[];

const totalData =   (state=initialState , action) =>{
    switch(action.type){
        case "SET_TASKS" : return action.todo
        default : 
        {
            console.log("default")
            return state;
        }
    }
}
export default totalData

