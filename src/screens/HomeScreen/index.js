import React from 'react';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';


const HomeScreen = ({navigation}) => {  
    return (
        <ScreenWrapper>
            <CustomButton title="Go to Admins" onPress={() => navigation.navigate('Admins')} />
            <CustomButton title="Go to Students" onPress={() => navigation.navigate('Students')} />
        </ScreenWrapper>
    );
    
}
export default HomeScreen;