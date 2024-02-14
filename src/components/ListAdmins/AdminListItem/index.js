import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'



const AdminListItem = ({admin}) => {
    const {firstName, lastName, id, email} = admin
    return (
        <View className="h-32 flex flex-row items-center mb-1 p-2  rounded-md mt-3 ">
            <View className="w-4/5 flex gap-y-5 justify-center">
                <Text  style={{fontFamily : "Rubik-Bubbles"}}>{lastName}, {firstName}</Text> 
                <Text  style={{fontFamily : "Rubik-Bubbles"}}>{email}</Text> 
                <Text>{id.$oid}</Text>
            </View>
        </View>
    )
}
export default AdminListItem