import { combineReducers, legacy_createStore } from "redux";
import serviceReducer from "./reducers/serviceReducer";
import listReducer from "./reducers/listReducer";
import filterReducer from "./reducers/filterReducer";

function store(){
   return legacy_createStore(
    combineReducers({
        service: serviceReducer,
        list: listReducer,
        filter: filterReducer,   
    })
    )
}

export default store;