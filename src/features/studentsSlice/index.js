import { createSlice } from '@reduxjs/toolkit'

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    filteredStudents : []
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload
    },
    setFilteredStudents: (state, action) => {
      const filteredStudents = action.payload ? state.students.filter(student => {
        return student.firstName.toLowerCase().includes(action.payload) ||
        student.lastName.toLowerCase().includes(action.payload) ||
        student.language.toLowerCase().includes(action.payload) ||
        student.level.toLowerCase().includes(action.payload)
      }) : state.students
      state.filteredStudents = filteredStudents.sort((a, b) => a.lastName.localeCompare(b.lastName))
    },
    deleteStudent : (state, action) => {
        const newStudents = state.students.filter(student => student.id.$oid !== action.payload.$oid)
        state.students = newStudents
        state.filteredStudents = newStudents
    },
  },
})

export const { deleteStudent, setFilteredStudents, setStudents} = studentsSlice.actions

export default studentsSlice.reducer