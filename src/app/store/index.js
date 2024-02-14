import { configureStore } from '@reduxjs/toolkit'
import pricesSlice from '../../features/pricesSlice'
import adminsSlice from '../../features/adminsSlice'
import studentsSlice from '../../features/studentsSlice'
import { authApi } from '../services/authServices'
import  authSlice  from '../../features/authSlice'
import { adminApi } from '../services/adminServices'

export default store = configureStore({
  reducer: {
    prices: pricesSlice,
    admins: adminsSlice,
    auth : authSlice,
    students : studentsSlice,
    [adminApi.reducerPath] : adminApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authApi.middleware, adminApi.middleware),
})





