import { configureStore } from '@reduxjs/toolkit'
import pricesSlice from '../../features/pricesSlice'
import adminsSlice from '../../features/adminsSlice'
import studentsSlice from '../../features/studentsSlice'

export default configureStore({
  reducer: {
    prices: pricesSlice,
    admins: adminsSlice,
    students : studentsSlice
  },
})