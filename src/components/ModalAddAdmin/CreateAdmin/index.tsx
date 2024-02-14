import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../../CustomInput';
import CustomInputPassword from '../../CustomInputPassword';
import CustomButton from '../../CustomButton';
import { signupSchema } from '../../../validations/signupSchema';
import { useSignupMutation } from '../../../app/services/authServices';
import { usePostAdminsMutation } from '../../../app/services/adminServices';
import * as Yup from 'yup';
import { useEffect } from 'react';


const CreateAdmin = ({setModalVisible, isSignup, navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
 

    const [triggerSignup, {data,isError, isSuccess : isSuccessSignup}] = useSignupMutation()
    const [triggerPostAdmin, {isSuccess : isSuccesPost}] = usePostAdminsMutation()

  

    useEffect (() => {
        if (isSuccessSignup && isSuccesPost) {
            isSignup ? navigation.navigate("Login") : setModalVisible(false)
        }
    }, [isSuccessSignup, isSuccesPost])


    const onSubmit = async () => {
        try {
            setErrorFirstName("")
            setErrorLastName("")
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            await signupSchema.validate({ email, password, confirmPassword, firstName, lastName }, { abortEarly: false });
            await Promise.all([
                triggerSignup({ email, password }),
                triggerPostAdmin({ email, firstName, lastName })
            ])
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    switch (error.path) {
                        case "email":
                            setErrorEmail(error.message);
                            break;
                        case "password":
                            setErrorPassword(error.message);
                            break;
                        case "confirmPassword":
                            setErrorConfirmPassword(error.message);
                            break;
                        case "firstName":
                            setErrorFirstName(error.message);
                            break;
                        case "lastName":
                            setErrorLastName(error.message);
                            break;
                    }
                });
            } else {
                console.log(err);
            }
        }
    } 

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{isSignup ? "Sign up" : "Add admin"}</Text>
            <View style={styles.containerInputs}>
                <CustomInput 
                    input={{
                        placeholder: "First Name",
                        value: firstName,
                        onChange: ((name, value) => setFirstName(value)),
                        name: "firstName",
                        error: errorFirstName
                    }}
                />
                <CustomInput 
                    input={{
                        placeholder: "Last Name",
                        value: lastName,
                        onChange: ((name, value) => setLastName(value)),
                        name: "lastName",
                        error: errorLastName
                    }}
                />
                <CustomInput 
                    input={{
                        placeholder: "Email",
                        value: email,
                        onChange: ((name, value) => setEmail(value.toLowerCase())),
                        name: "email",
                        error: errorEmail
                    }}
                />
                <CustomInputPassword
                    input={{
                        placeholder: "Password",
                        value: password,
                        onChange: ((name, value) => setPassword(value)),
                        name: "password",
                        error: errorPassword
                    }}
                />
                <CustomInputPassword 
                    input={{
                        placeholder: "Confirm Password",
                        value: confirmPassword,
                        onChange: ((name, value) => setConfirmPassword(value)),
                        name: "confirmPassword",
                        error: errorConfirmPassword
                    }}
                />
                <CustomButton   
                    title= {isSignup ? "Sign up" : "Add admin"}
                    onPress={onSubmit}
                />
            </View>
        </View>
    );
}



export default CreateAdmin;

const styles = StyleSheet.create ({
    container:  {
        flex: 1,
        alignItems: 'center',
    },
    containerInputs: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
        width: "100%",
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    },
    textContainer : {
        gap: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})