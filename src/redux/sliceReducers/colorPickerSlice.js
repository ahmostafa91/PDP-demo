import { createSlice } from '@reduxjs/toolkit'

export const colorPickerSlice = createSlice({
  name: 'colorPicker',
  initialState: {
    imageId: 1
  },
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value = state.value === 0 ? 0 : state.value - 1
    // },
    setImageId: {
      reducer: (state, action) => {
        state.imageId = action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImageId } = colorPickerSlice.actions

export default colorPickerSlice.reducer;