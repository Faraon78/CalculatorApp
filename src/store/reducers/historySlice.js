import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    list: [],
  },
  reducers: {
    addHistory: (state, action) => {
      state = state.list.unshift(action.payload)
    },

    clearHistory: (state) => {
      state.list = []
    },
  },
})

export const { addHistory, clearHistory } = historySlice.actions

export default historySlice.reducer
