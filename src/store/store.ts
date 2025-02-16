import { configureStore } from "@reduxjs/toolkit";
import  tableUser from "./todoListSlice/todolictCounter/todoList";

export const store=configureStore({
    reducer:{
         counter: tableUser
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch