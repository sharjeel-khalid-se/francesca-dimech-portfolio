import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./slicers/audioSlice"

export const store = configureStore({
    reducer : audioReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch