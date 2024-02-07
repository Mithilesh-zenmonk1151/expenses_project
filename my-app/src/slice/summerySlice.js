import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: "",
   
  };
  

const userSlice= createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        income(state, action ) {
            state.user = action.payload;
        },
       expenses(state, action ) {
        state.user= action.payload
       },
       Investment(state,action){
    
       }
    }
});

export default userSlice.reducer;
export const {addUser,removeUser,addData}=userSlice.actions;