import { useLoginMutation } from "../../app/services/authServices"
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import CustomInputPassword from "../../components/CustomInputPassword"
import { useState, useEffect } from "react"    
import { View, Text, Pressable, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { setUser } from "../../features/authSlice"
import { insertSession } from "../../db"


const LoginScreen = ({navigation}) => {
    const [triggerLogin, {data,isError, isSuccess, error, isLoading}] = useLoginMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
        triggerLogin({email, password})

    } 

    useEffect(() => {
      if (isSuccess) {
          dispatch(setUser(data))
          insertSession({localId: data.localId, idToken: data.idToken, email: data.email})
            .catch(err => console.log(err))
      }
      if (isError) {
          console.log(error)
      }
    }, [data, isError, isSuccess])

    return (
        <View style={styles.container}>
               <Text style={styles.title}>Login</Text>
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
            <CustomButton   
                title="Send"
                onPress={onSubmit}
            />
            <View style={styles.textContainer} >
            <Text>Not have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text className="text-blue-600">Sign up</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
   
}



export default LoginScreen

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