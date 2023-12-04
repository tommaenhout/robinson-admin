import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'


const StudentListItem = ({student, onModal}) => {
    const {firstName, lastName, language, level} = student
    return (
        <View className="h-32 flex flex-row items-center mb-1 p-2 border-2 border-gray-100 rounded-md mt-3 ">
            <View className="w-4/5 flex gap-y-5">
                <Text>{lastName}, {firstName}</Text> 
                <Text>{language} {level}</Text>
            </View>
            <Button title='DEL' onPress={() => onModal(student)}/>
        </View>
    )
}
export default StudentListItem