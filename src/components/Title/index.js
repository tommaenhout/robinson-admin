import React from 'react';
import { Text, View} from 'react-native';


const Title = ({ children }) => {
    return (
            <Text className="text-base text-center font-light">{children}</Text>
    )
}


export default Title;