import { createSlice } from '@reduxjs/toolkit'

export const priceSlice = createSlice({
  name: 'prices',
  initialState: {
    prices: [],
    pricesIndividual : [],
    pricesGroup : []
  },
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload
    },
    setPricesIndividual: (state) => {
      state.pricesIndividual = state.prices.filter(price => price.isGroup === false)
    },
    setPricesGroup: (state) => {
      state.pricesGroup = state.prices.filter(price => price.isGroup === true)
    },
  },
})

export const { setPrices, setPricesIndividual, setPricesGroup} = priceSlice.actions

export default priceSlice.reducer