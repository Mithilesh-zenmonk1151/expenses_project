import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
   
  };
  

const userSlice= createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        addUser(state, action ) {
            state.user = action.payload;
        },
       removeUser(state, action ) {
        return initialState;
       },
       addData(state,action){
        state.push(action.payload);
       }
    }
});

export default userSlice.reducer;
export const {addUser,removeUser,addData}=userSlice.actions;