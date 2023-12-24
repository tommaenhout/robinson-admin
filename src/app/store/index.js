import { configureStore } from '@reduxjs/toolkit'
import pricesSlice from '../../features/pricesSlice'
import adminsSlice from '../../features/adminsSlice'

export default configureStore({
  reducer: {
    prices: pricesSlice,
    admins: adminsSlice
  },
})