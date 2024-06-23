import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

// ** Create Slice ** 
// ** Định nghĩa các state của slice: initialState, reducers, action ** 

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer