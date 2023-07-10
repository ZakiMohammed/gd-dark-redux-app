import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    name: 'dark',
  },
  reducers: {
    toggle: (state) => {
      state.name = state.name === 'dark' ? 'light' : 'dark';
    },
  }
})

export const {
  toggle,
} = themeSlice.actions

export default themeSlice.reducer
