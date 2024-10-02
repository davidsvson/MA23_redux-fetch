import { createSlice } from "@reduxjs/toolkit"

export const STATUS = {
    NORMAL : "normal",
    FETCHING : "fetching",
    SUCCESS :"success",
    FAILURE : "failure"
}


const randomFactSlice = createSlice({
    name: "data",
    initialState: {
        status : STATUS.NORMAL,
        fact: null
    },
    reducers: {
        isFetching : (state) => {
            state.status = STATUS.FETCHING;
        }, 
        success: (state, action) => {
            state.status = STATUS.SUCCESS;
            state.fact = action.payload;  
        },
        failure: (state) => {
            state.status = STATUS.FAILURE;
            state.fact = null;
        }
    }
});

export const { isFetching, success, failure } = randomFactSlice.actions;
export default randomFactSlice.reducer;
