import changeTheNumber from "./upDown";
import totalData from "./getTotal"
import changeId from "./currentId";
import changeProfile from "./getProfile";
import { combineReducers} from "redux";
const rootReducer=combineReducers({
    totalData,changeId,changeProfile,
})

export default rootReducer;