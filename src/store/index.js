import { configureStore } from "@reduxjs/toolkit";
import { dataReducer,addData,removeData,changeSearchTerm } from "./slices/dataSlice";
import { formReducer,changeCost,changeName, } from "./slices/formSlice";

const store = configureStore({
    reducer:{
        datas:dataReducer,
        form:formReducer
    }
})

export {store,changeName,changeCost,addData,removeData,changeSearchTerm}