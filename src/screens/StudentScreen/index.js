import { useEffect } from 'react';
import { View} from 'react-native';
import React, { useState } from 'react';
import ListStudents from '../../components/ListStudents';
import ModalDelete from '../../components/ModalDelete';
import useValidation from '../../hooks/useValidation';
import { validations } from '../../constants/validations';
import { inputTypes } from '../../constants/inputTypes';
import InputPicker from '../../components/InputPicker';
import ScreenWrapper from '../../components/ScreenWrapper';
import ListWrapper from '../../components/ListWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { setStudents, setFilteredStudents, deleteStudent } from '../../features/studentsSlice';
import { useDeleteStudentMutation, useGetStudentsQuery } from '../../app/services/adminServices';

 const StudentScreen = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const students = useSelector((state) => state.students.students)
  const filteredStudents = useSelector((state) => state.students.filteredStudents)
  const {data, refetch, status} = useGetStudentsQuery()
  const [triggerDeleteStudent] = useDeleteStudentMutation()
  const [studentToDelete, setStudentToDelete] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(setStudents(data))
    }
  }, [status, data])



  function searchStudents(search) {
    dispatch(setFilteredStudents(search))
  } 
  const {error} = useValidation(searchStudents, search, validations.onlyLetters)

  
  const onModalHandler = (student) => {
    setStudentToDelete(student)
    setModalVisible(true)
  }

  const onDelete =  (id) => {
      triggerDeleteStudent(id).then((res) => {
      refetch()
      setModalVisible(false)
    }
    )
  }

  useEffect(() => {
    refetch()
  }, [])


  useEffect (() => {
    if (students.length >  0) {
      dispatch(setFilteredStudents(""))
    }
    }, [students])

  return (
    <ScreenWrapper>
      <View className="h-screen px-1">
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
      <ListWrapper>
        {students && 
          <ListStudents
            students={filteredStudents.sort((a, b) => a.lastName?.localeCompare(b.lastName))}
            onModal={onModalHandler}
          />}
      </ListWrapper>
      </View>
    </ScreenWrapper>
  );
}

export default StudentScreen
