import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'

export default configureStore({
    reducer:{
        isLoading
    }
})