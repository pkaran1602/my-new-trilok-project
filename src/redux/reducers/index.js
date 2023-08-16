import { combineReducers } from "redux";
import auth from "./auth";

const allReducers = combineReducers({
    auth: auth
})
export default allReducers;