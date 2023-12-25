import React from 'react'
import { View } from 'react-native'

const ListWrapper  = ({children, isAdmin}) =>  {
    const className = isAdmin ? "h-[60%]" : "h-[70%]"
    return (
        <View className={className}>
            {children}
        </View>
    )
}

export default ListWrapper