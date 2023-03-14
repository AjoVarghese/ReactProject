import { combineReducers } from "redux";
import { userHomeReducer } from "./USER/userHomeReducer";
import { userLoginReducer } from "./USER/userLoginReducer";
import { userRegisterReducer } from "./USER/userReducer";

const reducers = combineReducers({
    userRegisterReducer : userRegisterReducer,
    userLoginReducer : userLoginReducer,
    userHomeReducer : userHomeReducer,
})


export default reducers