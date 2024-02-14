
import { useEffect, useState } from "react"    
import { View, Text, Pressable, StyleSheet } from "react-native"
import CreateAdmin from "../../components/ModalAddAdmin/CreateAdmin"
import { Keyboard } from "react-native"


const SignupScreen = ({navigation}) => {

    const [keyboard, setKeyboard] = useState(false)
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
            setKeyboard(true)
          },
        );

        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
            setKeyboard(false)
          },
        );
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
  




    return (
        <View style={styles.container}>
            <View style={styles.containerInputs}>
            <CreateAdmin
                navigation={navigation}
                isSignup={true}/>
            <View style={keyboard ? styles.textContainerHidden : styles.textContainer} >
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
    },
    textContainerHidden : {
        display: 'none'
    }


})