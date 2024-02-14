import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        email : "",
        idToken : "",
        localId : "",
        isFirstTime : true
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser  : (state, action) => {
            state.email = action.payload.email
            state.idToken = action.payload.tokenId
            state.localId = action.payload.localId
        },
        clearUser : (state) => {
            state.email = ""
            state.idToken = ""
            state.localId = ""
        },
        setIsFirstTime : (state) => {
            state.isFirstTime = false
        }
    }
})

export const {setUser, clearUser, setIsFirstTime} = authSlice.actions

export default authSlice.reducer
