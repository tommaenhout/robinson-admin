import { createSlice } from '@reduxjs/toolkit'

export const priceSlice = createSlice({
  name: 'prices',
  initialState: {
    prices: {},
    pricesIndividual : [],
    pricesGroup : []
  },
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload
    },
    setPricesIndividual: (state) => {
      state.pricesIndividual = [
        state.prices.starter,
        state.prices.semi_pro,
        state.prices.pro
      ]
    },
    setPricesGroup: (state) => {
      state.pricesGroup = [
        state.prices.starter_group,
        state.prices.semi_pro_group,
        state.prices.pro_group
      ]
    },
  },
})

export const { setPrices, setPricesIndividual, setPricesGroup} = priceSlice.actions

export default priceSlice.reducer