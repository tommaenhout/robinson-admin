import { Fragment } from 'react';
import { Modal, View} from 'react-native';
import React, { useState } from 'react';
import dummyData from '../../../dummydata-admins.json'
import useValidation from '../../hooks/useValidation';
import { validations } from '../../constants/validations';
import { inputTypes } from '../../constants/inputTypes';
import InputPicker from '../../components/InputPicker';
import ListAdmins from '../../components/ListAdmins';
import ModalAddAdmin from '../../components/ModalAddAdmin';
import uuid from 'react-native-uuid';
import { useEffect } from 'react';

const adminsArray = dummyData

 const AdminScreen = () => {
  const [search, setSearch] = useState('')
  const [admins, setAdmins] = useState(adminsArray)
  const [filteredAdmins, setFilteredAdmins] = useState(adminsArray)
  const [modalVisible, setModalVisible] = useState(false)
  const [adminToAdd, setAdminToAdd] = useState(
    {
      id : {
        $oid : ''
      },
      firstName : '',
      lastName : '',
    }
  )
 
  function searchAdmins(search) {
    const newAdmins = admins.filter(admin => {
      return admin.firstName.toLowerCase().includes(search) ||
      admin.lastName.toLowerCase().includes(search) 
    })
    setFilteredAdmins(newAdmins)
  } 
  const {error} = useValidation(searchAdmins, search, validations.onlyLetters)
   
  function onModalHandler(admin) {
     setModalVisible (true)
  }

  function onChangeHandler (name, value) {
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
    console.log(newAdmin)
    setAdmins([
      ...admins,
      newAdmin
    ])
    setModalVisible(false)
  }

  useEffect (() => {
    setFilteredAdmins(admins)
  }, [admins])


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
  ]
  

  return (
    <Fragment>
      <View className="mt-8 h-screen p-1 ">
     
      <ModalAddAdmin
          addNewAdmin={addNewAdmin}
          visible= {modalVisible}
          setModalVisible = {setModalVisible}
          onAdd={setAdminToAdd}
          inputs={inputs && inputs}
          />
      <InputPicker
        input = {{ 
          onChange : setSearch,
          value : search,
          error : error,
          type : inputTypes.search,
        }}
      />

        {admins && 
        <ListAdmins
          admins={filteredAdmins.sort((a, b) => a.lastName.localeCompare(b.lastName))}
          onModal={onModalHandler}
        />}
      </View>
    </Fragment>
  );
}

export default AdminScreen 