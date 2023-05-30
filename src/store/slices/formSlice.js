import { createSlice } from "@reduxjs/toolkit";
import { addData } from "./dataSlice";

const formSlice = createSlice({
    name: 'form',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
           state.name = action.payload; 
          
        },
        changeCost(state,action){
           
            state.cost = action.payload;
        }
    },
    extraReducers(builder){
       builder.addCase(addData,(state,action)=>{
        state.name = '';
        state.cost = 0;
       })
    }
})

export const { changeCost,changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;