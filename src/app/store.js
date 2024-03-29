import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '../features/note/noteSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        note : noteReducer,
        user : userReducer
    }
})