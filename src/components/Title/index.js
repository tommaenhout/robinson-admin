import React from 'react';
import { Text } from 'react-native';


const Title = ({ children }) => {
    return (
        <Text className="text-center text-base font-light">{children}</Text>
    )
}


export default Title;