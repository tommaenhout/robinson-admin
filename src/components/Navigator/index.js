import StudentScreen from '../../screens/StudentScreen';
import AdminScreen from '../../screens/AdminScreen';
import HomeScreen from '../../screens/HomeScreen';
import PricesScreen from '../../screens/PricesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PricesDetailScreen from '../../screens/PricesDetailScreen';
import Header from '../Header';


const Navigator = () => {
    const Stack = createStackNavigator();
    return (
    <NavigationContainer>
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admins" component={AdminScreen} />
        <Stack.Screen name="Students" component={StudentScreen} />
        <Stack.Screen name="Prices" component={PricesScreen} /> 
        <Stack.Screen name="Price Edit" component={PricesDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator