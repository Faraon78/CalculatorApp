import { configureStore } from '@reduxjs/toolkit'
import selectedThemeReducer from './reducers/selectedThemeSlice'
import historyReducer from './reducers/historySlice'

export default configureStore({
  reducer: {
    selectedTheme: selectedThemeReducer,
    history: historyReducer,
  },
})
