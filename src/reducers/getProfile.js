const initialState ={
    image:"https://reqres.in/img/faces/7-image.jpg",
    firstName:"Dummy First Name",
    lastName:"Dummy Last Name",
    email:"Dummy Email",
    id:0
};

const changeProfile =   (state=initialState , action) =>{
    switch(action.type){
        case "GET_ID" : {
            console.log(action.profile + "<= ok")
            return action.profile
        }
        default : 
        {
            return state;
        }
    }
}
export default changeProfile
