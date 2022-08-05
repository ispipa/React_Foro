import { createSlice } from '@reduxjs/toolkit'

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers:{
        
        setLoadingGlobal : ( state, action ) => action.payload
    }
})

export const { setLoadingGlobal } = isLoadingSlice.actions 
export default isLoadingSlice.reducer