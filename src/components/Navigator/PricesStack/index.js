
import PricesScreen from '../../../screens/PricesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PricesDetailScreen from '../../../screens/PricesDetailScreen';
import Header from '../../Header';


const PricesStack = () => {
    const Stack = createStackNavigator();
    return (

      <Stack.Navigator
        initialRouteName="Prices"
        screenOptions={
            ({route}) => {
                return {
                    header : () => <Header title={
                        route.name 
                    }/>
                }
            }
        }>
        <Stack.Screen name="Prices" component={PricesScreen} />
        <Stack.Screen name="Price Edit" component={PricesDetailScreen} />
      </Stack.Navigator>
  
    )
}

export default PricesStack