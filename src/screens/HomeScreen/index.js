import React from 'react';
import CustomButton from '../../components/CustomButton';
import ScreenWrapper from '../../components/ScreenWrapper';


const HomeScreen = ({navigation,route}) => {  
    return (
        <ScreenWrapper>
            <CustomButton title="Go to Admins" onPress={() => navigation.navigate('Admins')} />
            <CustomButton title="Go to Students" onPress={() => navigation.navigate('Students')} />
            <CustomButton title="Go to Prices" onPress={() => navigation.navigate('Prices')} />
        </ScreenWrapper>
    );
    
}
export default HomeScreen;