import { createSlice } from '@reduxjs/toolkit'

export const adminsSlice = createSlice({
  name: 'prices',
  initialState: {
    admins: [],
    filteredAdmins : []
  },
  reducers: {
    setAdmins: (state, action) => {
   
      const keys = Object.keys(action.payload)
      const listAdmins = keys.map(key => {
        return {
          id : {
            $oid : key
          },
          firstName : action.payload[key].admin?.firstName,
          lastName : action.payload[key].admin?.lastName,
          email : action.payload[key].admin?.email,
        }
      }
      )
      state.admins = listAdmins
    },
    setFilteredAdmins: (state, action) => {
      const filteredAdmins = action.payload ? state.admins.filter(admin => {
        return admin.firstName?.toLowerCase().includes(action.payload) ||
        admin.lastName?.toLowerCase().includes(action.payload) 
      }) : state.admins
      state.filteredAdmins = filteredAdmins?.sort((a, b) => a.lastName?.localeCompare(b.lastName)) 
    },
    addAdmin : (state, action) => {
      state.admins.push(action.payload)
    },
  },
})

export const { setAdmins, setFilteredAdmins, addAdmin} = adminsSlice.actions

export default adminsSlice.reducer