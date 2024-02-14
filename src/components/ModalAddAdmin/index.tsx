

import CustomButton from "../CustomButton"
import CustomInput from "../CustomInput"
import CustomInputPassword from "../CustomInputPassword"
import { useEffect, useState } from "react"    
import { View, Text, StyleSheet } from "react-native"
import { useSignupMutation } from "../../app/services/authServices"
import { useDispatch } from "react-redux"
import { signupSchema } from "../../validations/signupSchema"
import * as Yup from "yup"
import { usePostAdminsMutation } from "../../app/services/adminServices"
import { Modal } from "react-native"
import CreateAdmin from "./CreateAdmin"


const ModalAddAdmin = ({visible,setModalVisible }) => {


    return (
        <Modal visible={visible}>
          <CreateAdmin
            setModalVisible={setModalVisible}
            isSignup = {false}
            navigation= {null}
          />
        <CustomButton 
            title="Close" 
            onPress={() => setModalVisible(false)} />
    </Modal>
    )
   
}



export default ModalAddAdmin

