import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../Header';
import MyProfileScreen from '../../../screens/MyProfileScreen';
import ImageSelector from '../../../screens/ImageSelector';
import LoginScreen from '../../../screens/LoginScreen';


const ProfileStack = () => {
    const Stack = createStackNavigator();
    return (

      <Stack.Navigator
        initialRouteName="MyProfile"
        screenOptions={
            ({route}) => {
                return {
                    header : () => <Header title="Profile"/>
                }
            }
        }>
        <Stack.Screen name="Profile" component={MyProfileScreen} />
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
     
      </Stack.Navigator>
  
    )
}

export default ProfileStack