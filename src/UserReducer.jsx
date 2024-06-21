import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

// ** Create Slice ** 
// ** Định nghĩa các state của slice: initialState, reducers, action ** 

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {

    }
})

export default userSlice.reducer