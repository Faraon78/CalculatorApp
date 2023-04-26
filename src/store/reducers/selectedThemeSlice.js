import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_NAME } from '../../constants/localName'

export const selectedThemeSlice = createSlice({
  name: 'selectedTheme',
  initialState: {
    selectedTheme: JSON.parse(localStorage.getItem(LOCAL_NAME)) || null,
  },
  reducers: {
    switchTheme: (state, action) => {
      state.selectedTheme = action.payload
      localStorage.setItem(LOCAL_NAME, JSON.stringify(action.payload))
    },
  },
})

export const { switchTheme } = selectedThemeSlice.actions

export default selectedThemeSlice.reducer
