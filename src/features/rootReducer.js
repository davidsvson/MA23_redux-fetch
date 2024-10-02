import { combineReducers } from "redux";
import randomFactReducer from "./randomFact";


const rootReducer = combineReducers({
    randomFact : randomFactReducer,
});

export {rootReducer};