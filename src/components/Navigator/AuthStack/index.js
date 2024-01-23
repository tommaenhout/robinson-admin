

import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../../../screens/SignupScreen';
import Header from '../../Header';
import LoginScreen from '../../../screens/LoginScreen';


const AuthStack = () => {
    const Stack = createStackNavigator();
    return (

      <Stack.Navigator
        initialRouteName="Sign up"
        screenOptions={
            ({route}) => {
                return {
                    header : () => <Header title="Welcome"/>
                }
            }
        }>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  
    )
}

export default AuthStack