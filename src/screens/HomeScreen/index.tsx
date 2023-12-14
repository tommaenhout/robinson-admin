import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';


const HomeScreen = ({navigation,route}) => {  
    return (
        <View>
            <CustomButton title="Go to Admins" onPress={() => navigation.navigate('Admins')} />
            <CustomButton title="Go to Students" onPress={() => navigation.navigate('Students')} />
        </View>
    );
    
}
export default HomeScreen;