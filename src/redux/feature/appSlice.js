import { createSlice } from "@reduxjs/toolkit"


const initialState = {
 isLoading: false,
}



export const appSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setIsLoading, } = appSlice.actions

export default appSlice.reducer