

import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialIcons} from "@expo/vector-icons"
import { deleteSession } from '../../db'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../features/authSlice'

const Header = ({title}) => {
    const localId = useSelector((state) => state.auth.localId)
    const dispatch = useDispatch()
    const logout = () => {
        deleteSession()
        dispatch(clearUser())
    }


    return (
        <>
            <View className="h-20 pb-4 flex justify-end items-center bg-white text-white">
                <Text style={{fontFamily: "Rubik-Bubbles", fontSize: 18}}>{title}</Text>
            </View>
            {localId && <Pressable className="absolute top-4 right-1 p-4" onPress={logout}>
                <MaterialIcons name="logout" size={34} color="black"/>
            </Pressable>}
        </>
    )
}

export default Header