

import React from 'react'
import { View, Text } from 'react-native'

const Header = ({title}) => {
    return (
        <>
            <View className="h-20 pb-4 flex justify-end items-center bg-white text-white">
                <Text style={{fontFamily: "Rubik-Bubbles", fontSize: 18}}>{title}</Text>
            </View>
        </>
    )
}

export default Header