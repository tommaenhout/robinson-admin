import { createSlice } from '@reduxjs/toolkit'

export const adminsSlice = createSlice({
  name: 'prices',
  initialState: {
    admins: [],
    filteredAdmins : []
  },
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload
    },
    setFilteredAdmins: (state, action) => {
      state.filteredAdmins = action.payload ? state.admins.filter(admin => {
        return admin.firstName.toLowerCase().includes(action.payload) ||
        admin.lastName.toLowerCase().includes(action.payload) 
      }) : state.admins
    },
  },
})

export const { setAdmins, setFilteredAdmins} = adminsSlice.actions

export default adminsSlice.reducer