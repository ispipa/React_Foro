import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/counter.slice'

export default configureStore({
    reducer:{
        counter
    }
})