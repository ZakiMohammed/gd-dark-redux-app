import { configureStore } from '@reduxjs/toolkit'
import themeReducers from './reducers/ThemeReducers'

export default configureStore({
    reducer: {
      theme: themeReducers,
    }
})
