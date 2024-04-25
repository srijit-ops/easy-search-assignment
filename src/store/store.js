import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { useSelector } from "react-redux";
import { loadDataFromLocalStorage, saveToLocalStorage } from "../utils/helperFunction";

export const store= createStore(rootReducer, 
    // loadDataFromLocalStorage()
)
// const storeState= store.getState()
// console.log(storeState)
// store.subscribe(()=>{saveToLocalStorage(storeState)})
