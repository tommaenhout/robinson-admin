
import PricesStack from './PricesStack';
import UsersStack from './UsersStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import ProfileStack from './ProfileStack';


const Navigator = () => {
    const Tab = createBottomTabNavigator();

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardOpen(false);
        });

        return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
        };
    }, []);

    const tabBarStyle = isKeyboardOpen ? styles.hiddenTabBar : styles.tabBar;
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle : tabBarStyle,
                               
            }}>
           <Tab.Screen 
                options={{
                    tabBarIcon: ({ focused }) => {
                    return (
                        <Entypo name="users" size={focused ? 24 : 20} color={focused ? "black" : "lightgray"} />
                    );
                    }
                }}
                name="Users Stack" component={UsersStack} />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({focused}) => <MaterialIcons name="attach-money" size={focused ? 24 : 20} color={focused ? "black" : "lightgray"} />
                }}
                name="Prices Stack" component={PricesStack} />
            <Tab.Screen 
                options={{
                    tabBarIcon: ({focused}) => <Entypo name="user" size={focused ? 24 : 20} color={focused ? "black" : "lightgray"}  />
                }}
                name="Profile Stack" component={ProfileStack} />
        </Tab.Navigator>
  
    )
}

export default Navigator

const styles = StyleSheet.create({
    tabBar : {
        backgroundColor : "white",
        elevation : 4,
        position: "absolute",
        border : "none",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,

    },
    hiddenTabBar : {
        display : "none"
    }
})