import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 15,
    reducers:{
        increment : state => state + 1,
        decrement :  state => state - 1,
        setCounterGlobal : ( state, action ) => action.payload
    }
})

export const { setCounterGlobal, increment, decrement } = counterSlice.actions 
export default counterSlice.reducer