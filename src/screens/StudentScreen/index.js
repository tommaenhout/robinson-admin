import { Fragment } from 'react';
import { View} from 'react-native';
import React, { useState } from 'react';
import ListStudents from '../../components/ListStudents';
import ModalDelete from '../../components/ModalDelete';
import useValidation from '../../hooks/useValidation';
import { validations } from '../../constants/validations';
import { inputTypes } from '../../constants/inputTypes';
import InputPicker from '../../components/InputPicker';

const studentsArray = require('../../../dummydata-students.json')

 const StudentScreen = () => {
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
  const {error} = useValidation(searchStudents, search, validations.onlyLetters)


  
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
      <View className="mt-8 h-screen p-1 ">
      {studentToDelete &&
      <ModalDelete
          student = {studentToDelete}
          visible= {studentToDelete && modalVisible}
          setModalVisible = {setModalVisible}
          onDelete={onDelete}
          />}
      <InputPicker
        input = {{ 
          onChange : setSearch,
          value : search,
          error : error,
          type : inputTypes.search,
        }}
      />
        {students && 
        <ListStudents
          students={filteredStudents.sort((a, b) => a.lastName.localeCompare(b.lastName))}
          onModal={onModalHandler}
        />}
      </View>
    </Fragment>
  );
}

export default StudentScreen