import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import CustomInputPassword from "../../components/CustomInputPassword"
import { useEffect, useState } from "react"    
import { View, Text, Pressable, StyleSheet } from "react-native"
import { useSignupMutation } from "../../app/services/authServices"
import { useDispatch } from "react-redux"
import { setUser } from "../../features/authSlice"


const SignupScreen = ({navigation}) => {
    const [triggerSignup, {data,isError, isSuccess, error, isLoading}] = useSignupMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerSignup({email, password})

    }   

    useEffect(() => {
       if (isSuccess) {
           dispatch(setUser(data))
       }

    }, [data, isError, isSuccess])


    return (
        <View style={styles.container}>
               <Text style={styles.title}>Sign Up</Text>
            <View style={styles.containerInputs}>
         
            <CustomInput 
                input={{
                    placeholder: "Email",
                    value: email,
                    onChange: ((name, value) => setEmail(value)),
                    name: "email",
                    error: ""
                }}
            />
            <CustomInputPassword
                input={{
                    placeholder: "Password",
                    value: password,
                    onChange: ((name, value) => setPassword(value)),
                    name: "password",
                    error: ""
                }}
            />
            <CustomInputPassword 
                input={{
                    placeholder: "Confirm Password",
                    value: confirmPassword,
                    onChange: ((name, value) => setConfirmPassword(value)),
                    name: "confirmPassword",
                    error: ""
                }}
            />
            <CustomButton   
                title="Sign Up"
                onPress={onSubmit}
            />
            <View style={styles.textContainer} >
            <Text>Already have an account</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text className="text-blue-600">Login</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
   
}



export default SignupScreen

const styles = StyleSheet.create ({
    container:  {
        flex: 1,
        alignItems: 'center',
    },
    containerInputs: {
        flex: 1,
        justifyContent: 'start',
        marginTop: 20,
        width: "90%",
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