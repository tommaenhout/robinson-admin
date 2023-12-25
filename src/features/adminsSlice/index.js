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
      const filteredAdmins = action.payload ? state.admins.filter(admin => {
        return admin.firstName.toLowerCase().includes(action.payload) ||
        admin.lastName.toLowerCase().includes(action.payload) 
      }) : state.admins
      state.filteredAdmins = filteredAdmins.sort((a, b) => a.lastName.localeCompare(b.lastName))
    },
    addAdmin : (state, action) => {
      state.admins.push(action.payload)
    },
  },
})

export const { setAdmins, setFilteredAdmins, addAdmin} = adminsSlice.actions

export default adminsSlice.reducer