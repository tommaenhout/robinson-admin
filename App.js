
import { Fragment, useEffect } from 'react';
import { View,TextInput } from 'react-native';
import React, { useState } from 'react';
import ListStudents from './src/components/ListStudents';
import dummyData from './dummydata';
import ModalDelete from './src/components/ModalDelete';

const studentsArray = dummyData

 const App = () => {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState(studentsArray)
  const [filteredStudents, setFilteredStudents] = useState(students)
  const [studentToDelete, setStudentToDelete] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  
  function searchStudents(search) {
    const newStudents = students.filter(student => {
      return student.firstName.toLowerCase().includes(search) ||
      student.lastName.toLowerCase().includes(search) ||
      student.language.toLowerCase().includes(search) ||
      student.level.toLowerCase().includes(search)
    })
    setFilteredStudents(newStudents)
  } 
  
  useEffect(() => {
    const searchLowerCase = search.toLowerCase()
    searchStudents(searchLowerCase)
  }, [search])

  const onModalHandler = (student) => {
    setStudentToDelete(student)
    setModalVisible(true)
  }

  const onDelete = (id) => {
    const newStudents = students.filter(student => student.id.$oid !== id.$oid)
    setStudents(newStudents)
    setFilteredStudents(newStudents)
    setStudentToDelete(null)
    setModalVisible(false)
  }

  return (
    <Fragment>
      <View className="mt-8 h-screen p-1">
      {studentToDelete &&
      <ModalDelete
          student = {studentToDelete}
          visible= {studentToDelete && modalVisible}
          setModalVisible = {setModalVisible}
          onDelete={onDelete}
          />}
      <TextInput
          className='border-2 border-gray-100 rounded-md h-10 w-full px-2'
          placeholder='Search'
          value={search}
          onChangeText={setSearch}/>
        {students && 
        <ListStudents
          students={filteredStudents.sort((a, b) => a.lastName.localeCompare(b.lastName))}
          onModal={onModalHandler}
        />}
      </View>
    </Fragment>
  );
}

export default App
