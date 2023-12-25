import { Fragment } from 'react';
import {View} from 'react-native';
import React, { useState} from 'react';
import dummyData from '../../../dummydata-admins.json'
import { inputTypes } from '../../constants/inputTypes';
import InputPicker from '../../components/InputPicker';
import ListAdmins from '../../components/ListAdmins';
import ModalAddAdmin from '../../components/ModalAddAdmin';
import uuid from 'react-native-uuid';
import { useEffect } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { setAdmins, setFilteredAdmins, addAdmin } from '../../features/adminsSlice';
import CustomButton from '../../components/CustomButton';
import ListWrapper from '../../components/ListWrapper';
import useValidation from '../../hooks/useValidation';
import { validations } from '../../constants/validations';


const adminsArray = dummyData

 const AdminScreen = () => {
  const admins = useSelector((state) => state.admins.admins)
  const filteredAdmins = useSelector((state) => state.admins.filteredAdmins)
  const [search, setSearch] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const [adminToAdd, setAdminToAdd] = useState(
    {
      id : {
        $oid : ''
      },
      firstName : '',
      lastName : '',
      password : '',
    }
  )
  useEffect (() => {
    dispatch(setAdmins(adminsArray))
  }, [])

  useEffect (() => {
    if (admins.length >  0) {
      dispatch(setFilteredAdmins(""))
    }
    }, [admins])

 
  function searchAdmins(search) {
    dispatch(setFilteredAdmins(search))
  } 
  const {error} = useValidation(searchAdmins, search, validations.onlyLetters)


   
  function onModalHandler() {
     setModalVisible (true)
  }

  function onChangeHandler (name, value) {
     console.log(adminToAdd)
     setAdminToAdd({
        ...adminToAdd,
        [name] : value
      })
  }

  function addNewAdmin () {
    let newAdmin = {
      ...adminToAdd,
      id : {
        $oid : uuid.v4()
      }
    }
    dispatch(addAdmin(newAdmin))
    setModalVisible(false)
  }

  function onConfirmPasswordHandler (name, value) {
    setConfirmPassword(value)
  }


  const inputs = [
    { 
      onChange : onChangeHandler,
      value : adminToAdd.firstName,
      name : 'firstName',
      type : inputTypes.text,
      placeholder : 'First Name',
    },
    { 
      onChange : onChangeHandler,
      value : adminToAdd.lastName,
      name : 'lastName',
      type : inputTypes.text,
      placeholder : 'Last Name',
    },
    {
      onChange : onChangeHandler,
      value : adminToAdd.password,
      name: 'password',
      type : inputTypes.password,
      placeholder : 'Password',
   
    },
    {
      onChange : onConfirmPasswordHandler,
      value : confirmPassword,
      name: 'confirmPassword',
      type : inputTypes.password,
      placeholder : 'Confirm Password',
    
    },
  ]
  
  return (
    <ScreenWrapper>
      <View className="h-screen px-1">
      <ModalAddAdmin
          addNewAdmin={addNewAdmin}
          visible= {modalVisible}
          setModalVisible = {setModalVisible}
          onAdd={setAdminToAdd}
          inputs={inputs && inputs}
          />
      <View>
          <InputPicker
          input = {{ 
            onChange : setSearch,
            value : search,
            error : error,
            type : inputTypes.search,
          }}
          />
      </View>
      <ListWrapper isAdmin>
        {filteredAdmins && 
        <ListAdmins
          admins={filteredAdmins}
          onModal={onModalHandler}
        />}
      </ListWrapper>
        <View className="pb-3">
            <CustomButton  title="Add Admin" onPress={onModalHandler} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default AdminScreen 