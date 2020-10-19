import {combineReducers} from "redux";
import {loginReducer} from "./reducer";

let rootReducer = combineReducers({
    loginReducer: loginReducer
});

export default rootReducer;