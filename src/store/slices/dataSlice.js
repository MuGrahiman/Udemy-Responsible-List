import { createSlice, nanoid } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'data',
    initialState:{
        searchTerm:'',
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        addData(state,action){
            state.data.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        removeData(state,action){
          
            const updatedData = state.data.filter(datum => {
                return datum.id !== action.payload
            })
            state.data = updatedData;
        }
    }
})

export const {changeSearchTerm,addData,removeData} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;