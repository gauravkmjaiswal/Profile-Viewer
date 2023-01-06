const initialState =-1;

const changeId =   (state=initialState , action) =>{
    switch(action.type){
        case "SET_ID" : {
            console.log(action.ID + "<=")
            return action.ID-1
        }
        default : 
        {
            return state;
        }
    }
}
export default changeId

