import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../redux/slice/ThemeSlice'
import popUpReducer from '../redux/slice/PopUpSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        popUp: popUpReducer
    },
})