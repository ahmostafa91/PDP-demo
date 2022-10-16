import { createSlice } from '@reduxjs/toolkit'

const totalQty = 51;

export const pricerSlice = createSlice({
  name: 'price',
  initialState: {
    totalQuantity: totalQty,
    storagePrice: 1049,
    qtyPrice: 1049,
    shippingPrice: 100,
    total: 1149
  },
  reducers: {
    incrementQty: (state,  action) => {
      state.totalQuantity = state.totalQuantity > 0 ? state.totalQuantity - 1 : 0;
      state.qtyPrice = action.payload * state.storagePrice;
      state.total = state.qtyPrice + state.shippingPrice;
    },
    decrementQty: (state) => {
        state.totalQuantity = state.totalQuantity < totalQty ? state.totalQuantity + 1 : totalQty;
        state.qtyPrice = state.qtyPrice - state.storagePrice;
        state.total = state.qtyPrice + state.shippingPrice;
    },
    setStoragePrice: {
      reducer: (state, action) => {
          state.storagePrice = action.payload;
          state.qtyPrice = action.payload;
          state.totalQuantity = totalQty;
          state.total = state.qtyPrice + state.shippingPrice;
      }
    },
    setShippingPriceAndTotal: (state, action) => {
        state.shippingPrice = action.payload;
        state.total = state.qtyPrice + state.shippingPrice;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStoragePrice, decrementQty, incrementQty, setShippingPriceAndTotal } = pricerSlice.actions

export default pricerSlice.reducer;