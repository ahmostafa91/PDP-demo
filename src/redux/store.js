import { configureStore } from '@reduxjs/toolkit';
import colorPickerSlice from './sliceReducers/colorPickerSlice';
import pricerSlice from './sliceReducers/priceSlice';

export default configureStore({
  reducer: {
    colorPicker: colorPickerSlice,
    price: pricerSlice
  },
})