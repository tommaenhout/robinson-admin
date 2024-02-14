import {View} from 'react-native';
import React, { useState} from 'react';
import { inputTypes } from '../../constants/inputTypes';
import InputPicker from '../../components/InputPicker';
import ListAdmins from '../../components/ListAdmins';
import ModalAddAdmin from '../../components/ModalAddAdmin';
import { useEffect } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { setAdmins, setFilteredAdmins } from '../../features/adminsSlice';
import CustomButton from '../../components/CustomButton';
import ListWrapper from '../../components/ListWrapper';
import useValidation from '../../hooks/useValidation';
import { validations } from '../../constants/validations';
import { useGetAdminsQuery } from '../../app/services/adminServices';


 const AdminScreen = () => {
  const admins = useSelector((state) => state.admins.admins)
  const filteredAdmins = useSelector((state) => state.admins.filteredAdmins)
  const {data, refetch, status} = useGetAdminsQuery()
  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
 

  useEffect (() => {
    if (admins.length >  0 && filteredAdmins.length === 0) {
      dispatch(setFilteredAdmins(""))
    }
    }, [admins])

 
  function searchAdmins(search) {
    dispatch(setFilteredAdmins(search))
  } 

  const {error} = useValidation(searchAdmins, search, validations.onlyLetters)

  useEffect (() => {
     !modalVisible && refetch()
  }, [modalVisible])

  useEffect(() => {
    if (status === 'fulfilled' && !admins.length) {
       dispatch(setAdmins(data))
    }
  }, [status])

  function onModalHandler() {
     setModalVisible (true)
  }

  return (
    <ScreenWrapper>
      <View className="h-screen px-1">
      <ModalAddAdmin
          visible= {modalVisible}
          setModalVisible = {setModalVisible}
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