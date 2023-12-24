import StudentScreen from '../../../screens/StudentScreen';
import AdminScreen from '../../../screens/AdminScreen';
import HomeScreen from '../../../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../Header';


const UsersStack = () => {
    const Stack = createStackNavigator();
    return (

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
            ({route}) => {
                return {
                    header : () => <Header title={
                        route.name 
                    }/>
                }
            }
        }>
        <Stack.Screen name="Users" component={HomeScreen} />
        <Stack.Screen name="Admins" component={AdminScreen} />
        <Stack.Screen name="Students" component={StudentScreen} />
      </Stack.Navigator>
  
    )
}

export default UsersStack