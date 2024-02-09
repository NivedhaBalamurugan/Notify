import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'nivedha'},
    {id: '1', name : 'kichu'}
]

const UserSlice  = createSlice({
    name: 'user',
    initialState,
    reducers:{}
})


export const selectAllUsers = (state) => state.user;
export default UserSlice.reducer;